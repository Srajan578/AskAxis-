// script.js
const collegeDetails = {
    "axis colleges": {
        "keywords": ["about", "bare", "barein", "baare"],
        "response": "Axis Colleges, established in 2010 in Kanpur, Uttar Pradesh, offers a diverse range of undergraduate, postgraduate, and diploma programs in fields such as engineering, management, architecture, pharmacy, and fashion design. The institution boasts a team of experienced faculty focused on providing practical, industry-oriented education and a supportive teacher-guardian system for academic and emotional assistance. Set on a 63-acre campus, it features well-equipped labs, high-speed internet, and sports facilities. Axis Colleges is committed to ensuring student placements after graduation and offers scholarships of up to ₹1 crore to support student startups. The infrastructure includes separate hostels for boys and girls and a bus service for local students, with all courses approved by AICTE and PCI.",
        "priority": 1 
    },
    "location": {
        "response": "Milestone- 478, Chakeri ward, Hathipur, Rooma, NH-2, Kanpur, Uttar Pradesh 209402",
        "keywords": ["location", "address"],
        "priority": 2
    },
    "courses": {
        "response": "B.Tech, M.Tech, BBA, MBA, BCA, MCA, etc.",
        "keywords": ["courses", "subjects"],
        "priority": 3
    },
    "admission": {
        "response": "Axis College admissions open in July every year. You can apply online through the college portal. For more details, visit the admissions page on the college website: https://axiscolleges.org/",
        "keywords": ["admission", "apply", "enrollment"],
        "priority": 4
    },
    "placements": {
        "response": "Axis College has an excellent placement record with top companies like Infosys, TCS, and Wipro visiting the campus for recruitment.",
        "keywords": ["placements", "jobs", "recruitment"],
        "priority": 5
    },
    "hostel": {
        "response": "Axis College provides hostel facilities for both boys and girls. The hostel is equipped with all modern amenities.",
        "keywords": ["hostel", "accommodation"],
        "priority": 6
    },
    "events": {
        "response": "The college conducts various cultural and technical events throughout the year, such as Tech Fest and Cultural Fest.",
        "keywords": ["events", "fests"],
        "priority": 7
    },
    "srajan": {
        "response": "Srajan ke friends Roshni, Shivangi, Siddhant, Vishakha, Sona, Arihant hai.",
        "keywords": ["friends", "srajan"],
        "priority": 8
    },
    "hey": {
        "response": "Hey there! How can I assist you today?",
        "keywords": [],
        "priority": 0
    },
    "hii": {
        "response": "Hello! How can I help you?",
        "keywords": [],
        "priority": 0
    },
    "hello": {
        "response": "Hi! What would you like to know?",
        "keywords": [],
        "priority": 0
    },
    "faculties": {
        "response": "Axis College has a dedicated team of experienced faculty members across all departments.",
        "keywords": ["faculty", "teachers"],
        "priority": 9
    },
    "vimal": {
        "response": "Vimal Sir is the co-ordinator of Section-C 3rd Year and teaches of DAA (Design and Analysis of Algorithms).",
        "keywords": ["vimal", "daa"],
        "priority": 10
    },
    "neharika": {
        "response": "Neharika Mam teaches Web Technology.",
        "keywords": ["neharika", "webtech"],
        "priority": 10
    },
    "ketan": {
        "response": "Ketan Sir is the instructor for DBMS (Database Management Systems).",
        "keywords": ["ketan", "dbms"],
        "priority": 10
    },
    "harikesh": {
        "response": "Harikesh Sir teaches Constitution of India, Law, and Engineering.",
        "keywords": ["harikesh", "constitution", "law", "engineering"],
        "priority": 10
    },
    "apoorva": {
        "response": "Apoorva Mam specializes in Object Oriented System Design with C++.",
        "keywords": ["apoorva", "oop", "c++"],
        "priority": 10
    },
    "shubha": {
        "response": "Shubha Mam is the HOD of B.Tech 2nd Year.",
        "keywords": ["shubha", "hod", "btech"],
        "priority": 10
    },
    "ashish": {
        "response": "Ashish Sir teaches Aptitude.",
        "keywords": ["ashish", "aptitude"],
        "priority": 10
    },
    "shail": {
        "response": "Shail Mam teaches Operating Systems.",
        "keywords": ["shail", "operating", "system"],
        "priority": 10
    },
    "axis": {
        "response": "The fee structure varies by course. You can find detailed information on the college's official website: https://axiscolleges.org/.",
        "keywords": ["fee", "structure"],
        "priority": 1
    },
    "director": {
        "response": "The Director of Axis College is Dr. Ashish Malik.",
        "keywords": ["director", "head"],
        "priority": 11
    },
    "owner": {
        "response": "Mr. Raj Kushwaha is the Chairman and Managing Director at Axis Colleges, Kanpur. He is an Edupreneur, Philanthropist, and Socialist who believes in educating the world and has played an outsized role in education with his arduous efforts.",
        "keywords": ["owner", "chairman"],
        "priority": 12
    },
    "bye": {
        "response": "Goodbye! Have a great day!",
        "keywords": [],
        "priority": 0
    },
    "thanks": {
        "response": "You're welcome! If you have more questions, feel free to ask.",
        "keywords": [],
        "priority": 0
    },
    "thank you": {
        "response": "No problem! I'm here to help.",
        "keywords": [],
        "priority": 0
    },
    "how are you": {
        "response": "I'm just a chatbot, but I'm here to assist you! How can I help you today?",
        "keywords": [],
        "priority": 0
    }
};



const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const saveBtn = document.getElementById('save-btn');
const deleteBtn = document.getElementById('delete-btn');
const typingIndicator = document.getElementById('typing-indicator');

let editMessageDiv = null; // To track which message is being edited

sendBtn.addEventListener('click', () => {
    const userQuestion = userInput.value.toLowerCase();
    if (userQuestion.trim()) { // Input validation
        if (editMessageDiv) {
            editMessageDiv.textContent = `You: ${userQuestion}`;
            editMessageDiv.classList.add('user');
            editMessageDiv = null; // Reset edit message
        } else {
            displayMessage(`You: ${userQuestion}`, 'user');
        }
        handleQuery(userQuestion);
        userInput.value = '';
    }
});

// Function to display messages
function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender);
    messageDiv.textContent = message;

    // Add edit functionality
    messageDiv.addEventListener('click', () => {
        if (sender === 'user') {
            editMessageDiv = messageDiv; // Set the current message to edit
            userInput.value = messageDiv.textContent.split(": ")[1]; // Set input to current message
        }
    });

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll to the latest message
}

function handleQuery(question) {
    typingIndicator.classList.remove('hidden'); // Show typing indicator

    // Simulate typing delay
    setTimeout(() => {
        let bestResponse = null;
        let bestPriority = Infinity; // Set to high value

        // Loop through collegeDetails to find a matching keyword
        for (const key in collegeDetails) {
            const entry = collegeDetails[key];
            if (entry.keywords) {
                for (const keyword of entry.keywords) {
                    if (question.includes(keyword)) {
                        const priority = entry.priority;
                        // Check for highest priority response
                        if (priority < bestPriority) {
                            bestResponse = entry.response;
                            bestPriority = priority;
                        }
                    }
                }
            }
        }

        typingIndicator.classList.add('hidden'); // Hide typing indicator

        if (bestResponse) {
            displayMessage(`AskAxis: ${bestResponse}`, 'bot');
        } else {
            displayMessage(`AskAxis: Mujhe is sawaal ka jawab nahi pata. Kya aap kuch aur puchhna chahenge?`, 'bot');
        }
    }, 1000); // Delay for 1 second to simulate typing
}


// Save chat functionality
saveBtn.addEventListener('click', () => {
    const chatMessages = document.querySelectorAll('#chat-box div');
    let chatContent = '';

    chatMessages.forEach(msg => {
        chatContent += msg.textContent + '\n';
    });

    const blob = new Blob([chatContent], {
        type: 'text/plain'
    });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'chat.txt';
    link.click();
});

// Delete conversation functionality
deleteBtn.addEventListener('click', () => {
    chatBox.innerHTML = ''; // Clear chat box
});
