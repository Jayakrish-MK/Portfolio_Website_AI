from flask import Flask, request, jsonify
import json

app = Flask(__name__)

# Load Langflow agent JSON
with open("langflow_agent.json") as f:
    agent_config = json.load(f)

@app.route('/query', methods=['POST'])
def query_agent():
    data = request.json
    user_input = data.get("query")

    # Simulate agent response
    response = {
        "response": f"AI Agent says: {user_input}"
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
