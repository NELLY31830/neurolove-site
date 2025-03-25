
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-pink-700">NeuroLove</h1>
        <p className="text-lg text-pink-600 mt-2">
          Compatibilité émotionnelle, bienveillance et amour profond 💖
        </p>
      </header>

      <main className="grid gap-6 max-w-4xl mx-auto">
        <section className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-pink-700 mb-2">Notre vision</h2>
          <p>
            NeuroLove est né de l’union de trois âmes alignées autour d’un même rêve :
            créer des connexions sincères et durables grâce à un test de compatibilité
            émotionnelle basé sur les valeurs, les projets de vie et les aspirations
            profondes.
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-pink-700 mb-2">Le test de compatibilité</h2>
          <p>
            Un questionnaire détaillé est en cours de création, mêlant psychologie, intuition
            et projection de vie. L’objectif est d’aider chacun à rencontrer une personne
            alignée avec ses besoins, son énergie et ses rêves. 💫
          </p>
          <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-xl">Découvrir le test bientôt</button>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-pink-700 mb-2">Nous contacter</h2>
          <p>
            Tu es thérapeute, coach ou professionnel du bien-être et tu veux rejoindre
            l’aventure NeuroLove ? Écris-nous à : neurolove.contact@gmail.com
          </p>
        </section>
      </main>

      <footer className="text-center text-sm text-pink-500 mt-10">
        © {new Date().getFullYear()} NeuroLove – Créé avec amour par Nelly, Jenny & Léo 💕
      </footer>
    </div>
  );
}

export default App;
