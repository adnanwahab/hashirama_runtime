import os

# Directory containing your CSS files
directory = './'

# List all files matching your pattern
css_files = [f for f in os.listdir(directory) if f.startswith('parallel_chunk') and f.endswith('.txt')]

# Function to extract CSS content and ignore explanatory text at the end
def extract_css(content):
    if True:
       start_marker = "```"
       end_marker = "```"
    # Look for the start and end markers
       start_idx = content.find(start_marker)
       end_idx = content.find(end_marker)
    if start_idx != -1 and end_idx != -1:
        # Extract the CSS between the markers, strip any extra whitespace
        return content[start_idx + len(start_marker):end_idx].strip()
    else:
        # Return the whole content if no markers are found (assuming it's all CSS)
        return content.strip()

# Open the output file to write all the combined CSS
with open('combined_css_file.css', 'w') as output_file:
    buffer = ""
    for css_file in css_files:
        # Read each file
        with open(os.path.join(directory, css_file), 'r') as f:
            content = f.read()
            css_content = extract_css(content)
            buffer += css_content + "\n\n\n\n"
    output_file.write(buffer + "\n")  # Append the extracted CSS with a newline

print("CSS extraction and combination complete.")
