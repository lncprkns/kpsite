const interviewQuestions = [
    "What makes you a competitive community college candidate?",
    "Describe your instructional approaches.",
    "How do you use technology in the classroom?",
    "What experience do you have teaching diverse populations; how will that knowledge and experience affect your teaching at ___?",
    "What do you teach that is of biggest lasting value? How do you know you’re effective?",
    "What experiences or interests do you have beyond the classroom in terms of academic and community contributions? ",
    "What would a working environment look like if it were to be a good fit for you?",
    "What have you read recently or are you currently reading? How will that impact your classrooms?",
    "What is the role of a community college? How is it different than a 4-year institution?",
    "What experience do you have teaching non-traditional, online, computer-aided online instruction?",
    "What experience do you have working with diverse students?",
    "What experience do you have developing SLOs and working on committees?",
    "Describe a student-centered learning environment.",
    "Why do you want to teach at ___? How do you see yourself fulfilling the mission and goals?",
    "What about English makes you want to share your knowledge with your students? How do you convince those who claim to hate English why this skill or idea is appealing?",
    "How do you get the most out of students of different levels, academic abilities, motivations, and backgrounds?",
    "Considering our mission and our program, what would you bring to the table? How would you be able to contribute? Do you see anything that needs to be addressed or anything lacking?",
    "You have educational background in multiculturalism and diversity. How does that guide or affect your teaching? ",
    "If you were in the perfect environment, what would your department look like?",
    "What do you expect your first semester college students to get out of your class?",
    "Describe your experience with course design and delivery, including curriculum and content development, learning platforms (i.e., Brightspace), and delivery in various modalities, including face-to-face, online, remote synchronous, blended, etc",
    "Describe your experience working with underprepared students, for example those who have either tested or self-placed into developmental level courses.",
    "Describe your knowledge of and experience with developmental education, including pre- and co-requisite models, placement practices, current trends in research, and/or praxis.",
    "What is your comfort level with having critical conversations pertaining to race, gender, and ethnicity in the classroom and campus environment with students and faculty? Provide an example of a time when you handled an issue like this or describe the philosophy and perspective you would bring to these conversations and opportunities.",
    "How would your colleagues describe you as a leader, coworker, and collaborator? Describe either a conflict you have been involved in at work or a situation in which you did all the right things and were still unsuccessful. How did you handle the situation? What did you learn?",
    "Do you have any other information you would like to share with us? Do you have any questions you want to ask the committee?",
    "Briefly summarize how your previous work experience, education, and life experience will help you to be successful teaching at __________ College. What about the college and this position attracts you?",
    "How do you seek to identify and eliminate barriers for students?",
    "How do you define diversity? Please share an example of how your personal and professional experiences have informed your perspective on diversity. How do you plan to integrate diversity in your instruction?"
]

function displayQuestion() {
    const selectQuestion = Math.floor(Math.random() * interviewQuestions.length)
    
    document.getElementById('question-display').innerHTML = `
            <p>${interviewQuestions[selectQuestion]}</p>
        `
}

displayQuestion()