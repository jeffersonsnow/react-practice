import Header from './components/Header.jsx';
import CoreConcept from "./components/CoreConcept.jsx";

import { CORE_CONCEPTS } from "./data.js";

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Time to get started!</h2>
                    <ul>
                        {CORE_CONCEPTS.map((concept, index) => (
                            <CoreConcept {...concept} key={index} />
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;