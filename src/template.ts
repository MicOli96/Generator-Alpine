export function template() {
    return /* html */`
        <section x-data="app()">
            <h1>Mumindalens träningsgenerator</h1>
            <button x-on:click="category = 'Alla'">Alla</button>
            <button x-on:click="category = 'Styrka'">Styrka</button>
            <button x-on:click="category = 'Rörlighet'">Rörlighet</button>
            <button x-on:click="category = 'Kondition'">Kondition</button>
            <button x-on:click="generateWorkout()">Generera</button>
            <p x-show="generated.length === 0">Välj filter och klicka på generera.</p>
            <ul x-show="generated.length > 0">
                <template x-for="w in generated" :key="w.name">
                    <li x-text="w.name"></li>
                </template>
            </ul>
        </section>
        `;
}