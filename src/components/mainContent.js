import data from "./data"
import SingleQuestion from "./questions"
import { useState } from "react"

export default function Main() {
    const [questions, setQuestions] = useState(data)
    return(
        <div className="container d-flex justify-content-center">
            <div className="card shadow p-1">
                <div className="card-body d-flex">
                    <div className="me-4 mt-3"><h2 className="text-left">Questions and Answers about login</h2></div>
                    <div>
                        {questions.map((question) => (
                            <div className="card mt-4 ms-5 shadow me-3" style={{width:"35rem"}}>
                                <div className="card-body">
                                    <SingleQuestion key={question.id} {...question} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}