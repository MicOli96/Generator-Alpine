export function template() {
    return /* html */`
        <section x-data="app()">
            <header>
                <h1>Mumindalens träningsgenerator</h1>
            </header>

            <form x-on:submit.prevent="generateWorkout()">
                <label for="difficulty">Välj svårighet</label>
                <select id="difficulty" x-model="difficulty">
                    <option value="Alla">Alla</option>
                    <option value="Lätt">Sniff (Lätt)</option>
                    <option value="Medel">Mumin (Medel)</option>
                    <option value="Svårt">Lilla My (Svårt)</option>
                </select>

                <label for="category">Välj kategori</label>
                <select id="category" x-model="category">
                    <option value="Alla">Alla</option>
                    <option value="Styrka">Styrka</option>
                    <option value="Kondition">Kondition</option>
                    <option value="Rörlighet">Rörlighet</option>
                </select>

                <button type="submit">Generera</button>
            </form>

            <p x-show="generated.length === 0">Välj filter och klicka på generera.</p>
            <ul x-show="generated.length > 0">
                <template x-for="w in generated" :key="w.name">
                    <li x-text="w.name + ' - ' + w.reps + ' reps'"></li>
                </template>
            </ul>
        </section>
        `;
}