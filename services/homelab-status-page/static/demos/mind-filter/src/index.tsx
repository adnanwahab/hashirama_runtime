try {
  (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__ = { isDisabled: true };
} catch (e) {
  // Just trying to hide irrelevant console noise.
}

import "./index.css";
import "flowbite";
import * as React from "react";
import ReactDOM from "react-dom/client";
import { heaviside } from "./HeavisideActivation";
import ClassificationPlot from "./ClassificationPlot";
import { RangeSlider } from "flowbite-react";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import {
  PerceptronAlone,
  NOT_GATE_NETWORK,
  IRIS_NETWORK,
  OR_GATE_NETWORK,
  OR_GATE_DATA,
  zeroWeights,
  Weight,
  networkOutput,
  modifyInputs,
  Input,
  ComputedWeights,
} from "./Perceptron";
import subscript from "./subscript";
import { InputPill, OutputPill, WeightPill, HOutPill } from "./Pill";
import IrisSetosaData from "./IrisSetosaData";
import { AppState, NetworkName } from "./AppState";
import PerceptronRiv from "./perceptron.riv";
import SizeContainer from "./SizeContainer";
import { pad } from "./format";
import TwitterProfile from "./TwitterProfile";

type AppStateAndNetwork = {
  appState: AppState;
  setAppState: (appState: AppState) => void;
  networkName: NetworkName;
};

function arraysEqual<T>(
  a: ReadonlyArray<T>,
  b: ReadonlyArray<T>,
  check: (x: T, y: T) => boolean = (x, y) => x === y,
) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (!check(a[i]!, b[i]!)) {
      return false;
    }
  }
  return true;
}

function Output() {
  return <OutputPill>output</OutputPill>;
}

type InputOrWeightSliderProps = {
  appState: AppState;
  setAppState: (appState: AppState) => void;
  networkName: NetworkName;
  className: string;
};

function InputSlider(props: InputOrWeightSliderProps & { inputIndex: number }) {
  const { appState, setAppState, inputIndex } = props;
  return (
    <RangeSlider
      className={props.className}
      id={`x-input-slider-${inputIndex}`}
      min="0"
      max="1"
      step="0.01"
      value={appState[props.networkName].inputs[inputIndex]!.value}
      onChange={(e) => {
        const network = appState[props.networkName];
        const input: Input = network.inputs[inputIndex]!;
        let inputs: Array<Input> = [];
        for (let i = 0; i < network.inputs.length; i++) {
          if (i === inputIndex) {
            inputs.push({ ...input, value: Number(e.target.value) });
          } else {
            inputs.push(network.inputs[i]!);
          }
        }
        setAppState({
          ...appState,
          [props.networkName]: { ...network, inputs },
        });
      }}
    />
  );
}

function WeightSlider(
  props: InputOrWeightSliderProps & { weightIndex: number },
) {
  const { appState, setAppState, weightIndex } = props;
  return (
    <RangeSlider
      className={props.className}
      id={`x-weight-slider-${weightIndex}`}
      min="-2"
      max="2"
      step="0.01"
      value={appState[props.networkName].weights[weightIndex]!.value}
      onChange={(e) => {
        const network = appState[props.networkName];
        const weight: Weight = network.weights[weightIndex]!;
        let weights: Array<Weight> = [];
        for (let i = 0; i < network.weights.length; i++) {
          if (i === weightIndex) {
            weights.push({ ...weight, value: Number(e.target.value) });
          } else {
            weights.push(network.weights[i]!);
          }
        }
        setAppState({
          ...appState,
          [props.networkName]: { ...network, weights },
        });
      }}
    />
  );
}

function X1SliderAndPill(props: AppStateAndNetwork) {
  return <InputSliderAndPill {...props} inputIndex={0} />;
}
function X2SliderAndPill(props: AppStateAndNetwork) {
  return <InputSliderAndPill {...props} inputIndex={1} />;
}

function W1SliderAndPill(props: AppStateAndNetwork) {
  return <WeightSliderAndPill {...props} weightIndex={0} />;
}
function W2SliderAndPill(props: AppStateAndNetwork) {
  return <WeightSliderAndPill {...props} weightIndex={1} />;
}
function W3SliderAndPill(props: AppStateAndNetwork) {
  return <WeightSliderAndPill {...props} weightIndex={2} />;
}

const rangeSliderClassName = "flex-1";
const rangeSliderLabelClassName =
  "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

function SliderWithPillContainer(
  props: React.PropsWithChildren & { label: React.ReactNode },
) {
  return (
    <div className={"flex gap-2"}>
      <div className={"flex-none w-24"}>{props.label}</div>
      {props.children}
    </div>
  );
}

function Twitter({ profile }: { profile: string }) {
  return (
    <a
      href={`https://twitter.com/${profile}`}
      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
    >
      @{profile}
    </a>
  );
}

function Github({ profile }: { profile: string }) {
  return (
    <a
      href={`https://github.com/${profile}`}
      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
    >
      @{profile}
    </a>
  );
}

function InputSliderAndPill(
  props: AppStateAndNetwork & { inputIndex: number },
) {
  const { appState, setAppState, networkName, inputIndex } = props;
  return (
    <SliderWithPillContainer
      label={
        <label
          htmlFor={`x-input-slider-${inputIndex}`}
          className={rangeSliderLabelClassName}
        >
          <InputPill>X{subscript(inputIndex + 1)}</InputPill> ={" "}
          <span className="text-sky-500">
            {pad(appState[networkName].inputs[inputIndex]!.value)}
          </span>
        </label>
      }
    >
      <InputSlider
        className={rangeSliderClassName}
        appState={appState}
        setAppState={setAppState}
        networkName={networkName}
        inputIndex={inputIndex}
      />
    </SliderWithPillContainer>
  );
}

function WeightSliderAndPill(
  props: AppStateAndNetwork & { weightIndex: number },
) {
  const { appState, setAppState, networkName, weightIndex } = props;
  return (
    <SliderWithPillContainer
      label={
        <label
          htmlFor={`x-weight-slider-${weightIndex}`}
          className={rangeSliderLabelClassName}
        >
          <WeightPill>W{subscript(weightIndex + 1)}</WeightPill> ={" "}
          <span className="text-amber-500">
            {pad(appState[networkName].weights[weightIndex]!.value)}
          </span>
        </label>
      }
    >
      <WeightSlider
        className={rangeSliderClassName}
        appState={appState}
        setAppState={setAppState}
        networkName={networkName}
        weightIndex={weightIndex}
      />
    </SliderWithPillContainer>
  );
}

const RivePerceptron = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  const { RiveComponent } = useRive({
    src: PerceptronRiv,
    stateMachines: "State Machine 1",
    layout: new Layout({
      fit: Fit.FitWidth,
      alignment: Alignment.TopCenter,
    }),
    artboard: "New Artboard",
    autoplay: true,
  });
  return <RiveComponent style={{ width: width, height: height }} />;
};

function Example() {
  const [appState, setAppState] = React.useState<AppState>({
    notGateNetwork: NOT_GATE_NETWORK,
    orGateNetwork: zeroWeights(OR_GATE_NETWORK),
    irisNetwork: IRIS_NETWORK,
    showTease: true,
  });
  const showTease = appState.showTease;
  const notGateHOut = heaviside(networkOutput(appState.notGateNetwork));
  return (
    <div className="bg-slate-700 text-gray-200 mb-10">
      <div className="mx-auto max-w-7xl">
 
        <div className="mx-5 sm:text-center m-5">
          <h1 className="sm:text-6xl font-bold tracking-tight text-white text-4xl">
            The Mind Filter
          </h1>
          <SizeContainer className="w-full">
          {({ width }) => (
            <RivePerceptron {...{ width, height: width * 0.4 }} />
          )}
        </SizeContainer>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Is a processing plant
            that repackages inputs
            We do not see the world as it is. 
            We only see, what our mind shows to us. 
            Society the mind creates. The mind creates the human.
          </p>
          <div className="mx-auto">
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {" "}
              <InputPill>inputs</InputPill>,{" "}
              <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium bg-amber-200 text-amber-800 ring-2 ring-inset ring-amber-400">
                weights
              </span>
              , {" "}
              <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium bg-pink-500 text-pink-200 ring-2 ring-inset ring-pink-200">
                
              </span>
              activation function (H).
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Let's look at the negate function. It takes an input and inverts it.
            </p>
          </div>
          <div className="mt-6">
            <X1SliderAndPill
              appState={appState}
              setAppState={setAppState}
              networkName="notGateNetwork"
            />
          </div>
          <div className="mt-6">
            <PerceptronAlone
              showHInputLine={true}
              showTease={showTease}
              network={appState.notGateNetwork}
              onChangeNetwork={(network) => {
                setAppState({
                  ...appState,
                  notGateNetwork: network,
                  showTease: false,
                });
              }}
            />
            <p className="mt-6 text-lg leading-8 text-gray-300">
              <InputPill>
                {pad(appState.notGateNetwork.inputs[0]!.value)}
              </InputPill>
              {" × "}
              <WeightPill>
                {pad(appState.notGateNetwork.weights[0]!.value)}
              </WeightPill>
              {" + "}
              <InputPill>
                {pad(appState.notGateNetwork.inputs[1]!.value)}
              </InputPill>
              {" × "}
              <WeightPill>
                {pad(appState.notGateNetwork.weights[1]!.value)}
              </WeightPill>
              {" = "}
              <OutputPill>
                {pad(networkOutput(appState.notGateNetwork))}
              </OutputPill>
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              To make sure the values are only 0 or 1, the activation function
              takes the <Output /> value and returns <HOutPill value={0} /> if
              the value is negative and <HOutPill value={1} /> if the value is
              positive.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              H({" "}
              <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium bg-pink-500 text-pink-200 ring-2 ring-inset ring-pink-200">
                {pad(networkOutput(appState.notGateNetwork))}
              </span>
              ) = <HOutPill value={notGateHOut} />
            </p>
            <svg viewBox="0 0 300 130">
              <g transform="translate(100,10)">
                <ClassificationPlot
                  width={100}
                  height={100}
                  network={appState.notGateNetwork}
                />
              </g>
            </svg>
            <div className="mt-6">
              <X1SliderAndPill
                appState={appState}
                setAppState={setAppState}
                networkName="notGateNetwork"
              />
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              What's most interesting about perceptrons, and neural networks in
              general, is their ability to learn. In our simple NOT perceptron,
              we started with the correct <WeightPill>weights</WeightPill>.
              Typically, we'll 'learn' the <WeightPill>weights</WeightPill>{" "}
              through training.
            </p>
          </div>
          <div className="mx-auto">
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Can you set the <WeightPill>weights</WeightPill> to implement the
              OR perceptron? When either of the two{" "}
              <InputPill>inputs</InputPill> are a <InputPill>1</InputPill>, H(
              <Output />) should be <HOutPill value={1} />. Otherwise, H(
              <Output />) should be <HOutPill value={0} />.
            </p>
            <table className="w-full table-fixed">
              <thead className="">
                <tr>
                  <th>
                    <InputPill>X{subscript(1)}</InputPill>
                  </th>
                  <th>
                    <InputPill>X{subscript(2)}</InputPill>
                  </th>
                  <th>expected</th>
                  <th>actual</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [0, 0, 0],
                  [0, 1, 1],
                  [1, 0, 1],
                  [1, 1, 1],
                ]
                  .map((row) => {
                    const network = modifyInputs(
                      row.slice(0, 2),
                      appState.orGateNetwork,
                    );
                    const h = heaviside(networkOutput(network));
                    const expected = row[row.length - 1] as 0 | 1;
                    return [
                      ...row.slice(0, 2).map((a) => <InputPill>{a}</InputPill>),
                      <HOutPill value={expected} />,
                      <HOutPill value={h} />,
                    ];
                  })
                  .map((row, index) => {
                    return (
                      <tr key={index}>
                        {row.map((r, index) => (
                          <td key={index}>{r}</td>
                        ))}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <div className="mt-6">
              <X1SliderAndPill
                appState={appState}
                setAppState={setAppState}
                networkName="orGateNetwork"
              />
              <X2SliderAndPill
                appState={appState}
                setAppState={setAppState}
                networkName="orGateNetwork"
              />
              <W1SliderAndPill
                appState={appState}
                setAppState={setAppState}
                networkName="orGateNetwork"
              />
              <W2SliderAndPill
                appState={appState}
                setAppState={setAppState}
                networkName="orGateNetwork"
              />
              <W3SliderAndPill
                appState={appState}
                setAppState={setAppState}
                networkName="orGateNetwork"
              />
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              <InputPill>
                {pad(appState.orGateNetwork.inputs[0]!.value)}
              </InputPill>
              {" × "}
              <WeightPill>
                {pad(appState.orGateNetwork.weights[0]!.value)}
              </WeightPill>
              {" + "}
              <InputPill>
                {pad(appState.orGateNetwork.inputs[1]!.value)}
              </InputPill>
              {" × "}
              <WeightPill>
                {pad(appState.orGateNetwork.weights[1]!.value)}
              </WeightPill>
              {" + "}
              <InputPill>
                {pad(appState.orGateNetwork.inputs[2]!.value)}
              </InputPill>
              {" × "}
              <WeightPill>
                {pad(appState.orGateNetwork.weights[2]!.value)}
              </WeightPill>
              {" = "}
              <OutputPill>
                {pad(networkOutput(appState.orGateNetwork))}
              </OutputPill>
            </p>
            <div className="mt-6">
              <PerceptronAlone
                showHInputLine={true}
                showTease={showTease}
                network={appState.orGateNetwork}
                onChangeNetwork={(network) => {
                  setAppState({
                    ...appState,
                    orGateNetwork: network,
                    showTease: false,
                  });
                }}
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={arraysEqual(
                appState.orGateNetwork.weights,
                OR_GATE_NETWORK.weights,
                (a, b) => a.value === b.value,
              )}
              onClick={() => {
                setAppState({
                  ...appState,
                  orGateNetwork: {
                    ...appState.orGateNetwork,
                    weights: OR_GATE_NETWORK.weights,
                  },
                });
              }}
            >
              show correct weights
            </button>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              To get to the <WeightPill>weights</WeightPill> without having to
              guess them, we can instead train the perceptron using examples,
              aka, data.
            </p>
            <table className="w-full table-fixed">
              <thead>
                <tr>
                  <th>
                    <InputPill>X{subscript(1)}</InputPill>
                  </th>
                  <th>
                    <InputPill>X{subscript(2)}</InputPill>
                  </th>
                  <th>expected</th>
                </tr>
              </thead>
              <tbody>
                {OR_GATE_DATA.map((row) => {
                  return [
                    ...row.slice(0, 2).map((a) => <InputPill>{a}</InputPill>),
                    <HOutPill value={row[2] as 0 | 1} />,
                  ];
                }).map((row, index) => {
                  return (
                    <tr key={index}>
                      {row.map((r, index) => (
                        <td key={index}>{r}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              The steps for this involves going through every mistake and understand
              by mechanics of reality behind the curtain. 
            </p>
            <ComputedWeights
              appState={appState}
              setAppState={setAppState}
              networkName="orGateNetwork"
              data={OR_GATE_DATA}
            />
            <p className="mt-6 text-lg leading-8 text-gray-300">
            (
              <HOutPill value={1} />) or not (
              <HOutPill value={0} />
              ).
            </p>
            <div className="overflow-scroll h-80">
              <table className="table-auto w-full">
                <thead className="sticky top-0">
                  <tr className="bg-gray-100">
                    <th className="w-20 px-4 py-2">sepal length (cm)</th>
                    <th className="px-4 py-2">sepal width (cm)</th>
                    <th className="px-4 py-2">petal length (cm)</th>
                    <th className="px-4 py-2">petal width (cm)</th>
                    <th className="px-4 py-2">class of iris</th>
                  </tr>
                </thead>
                <tbody>
                  {IrisSetosaData.map((data, index) => {
                    return (
                      <tr key={index}>
                        {data.map((d, index) => (
                          <td key={index}>{d}</td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="mt-6">
              <PerceptronAlone
                showHInputLine={false}
                showTease={showTease}
                network={appState.irisNetwork}
                onChangeNetwork={(network) => {
                  setAppState({
                    ...appState,
                    irisNetwork: network,
                    showTease: false,
                  });
                }}
              />
            </div>
            <ComputedWeights
              appState={appState}
              setAppState={setAppState}
              networkName="irisNetwork"
              data={IrisSetosaData.map((row) => [
                ...(row.slice(0, -1) as [number, number, number, number]),
                row[row.length - 1] === "Iris-setosa" ? 1 : 0,
              ])}
            />
            
           
            
          </div>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Example />);
