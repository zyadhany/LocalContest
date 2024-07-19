import subprocess

def submit_code(problem_id, file_path):
  command = f"./cfom submit {problem_id} {file_path}"
  result = subprocess.run(command, shell=True, capture_output=True, text=True)
  if result.returncode == 0:
    print("Submission successful!", result)
  else:
    print("Submission failed:", result.stderr)

# Example usage:
submit_code("1945A", "main.cpp")
