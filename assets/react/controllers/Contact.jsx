import React from 'react';

const Contact = () => {
    return (
        <div class="w-full px-max py-max">
            <div class="w-1/3 mx-auto">
                <form id="contact" name="contact" class="libelle" action="#" method="POST">
                    <div class="mb-4">
                        <div class="text-left">
                            <h2 class="text-2xl mb-4 font-bold left-align">Contactez-nous</h2>
                            <label class="flex text-gray-300 text-xs mb-2" for="conditions">Une demande particulière à adresser à l’un de nos modérateurs ? Un bug technique que vous ne savez résoudre sans notre aide ? Si votre problématique nécessite l’aide de notre staff, contactez-nous grâce au formulaire ci-dessous et nous vous répondrons dès que possible. Le délai de réponse est de 48 heures maximum.</label>
                        </div>
                    </div>
                    <div class="mb-4">
                        <label class="flex text-gray-300 text-xs font-bold mb-2" for="email">Adresse Email (*)</label>
                        <input class="w-full text-xs px-2 py-1  placeholder:text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            type="email" id="email" name="email" placeholder="emmanuel@elysee.com"></input>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-300 text-xs text-left font-bold mb-2" for="objet_demande">Objet de la demande (*)</label>
                        <div class="text-left">
                            <select class="w-1/2 p-1 pl-2 rounded-md text-xs" name="menu_objet_demande">
                                <option class="m-4">Bug technique</option>
                                <option class="m-4">Probl&egrave;me administratif</option>
                                <option class="m-4">Demande de d&eacute;blocage</option>
                                <option class="m-4">Oubli du mot de passe</option>
                                <option class="m-4">Autre raison</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-4">
                        <label class="flex text-gray-300 text-xs font-bold mb-2" for="description">Description (*)</label>
                        <textarea class="w-full text-xs px-2 py-1 text-gray-500 placeholder:text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            type="text" id="description" name="description" placeholder="Tapez votre message ici ( 500 caractères max.)"></textarea>
                    </div>
                    <div class="w-full mx-auto mb-4 bg-center">
                        <div class="w-1/2  bg-center grid grid-cols-3 flex mb-4 mt-4 bg-slate-200 rounded-xl">
                            <div class="flex-none w-10 mx-auto my-auto ml-2"><input type="checkbox" name="non-robot"></input></div>
                            <div class="grow text-xs text-left p-1 color:rgb(217 217 217)">Je ne suis pas<br /> un robot</div>
                            <div class="flex-none w-10">&nbsp;</div>
                        </div>
                    </div>
                    <button class="w-1/4 inline-block bg-purple-900 text-white text-xs font-bold py-2 px-4 mt-4 rounded-md hover:bg-indigo-600 transition duration-300"
                        type="submit"><div class="text-xs text-center">Validez</div></button>
                </form >
            </div>
        </div >
    )
}

export default Contact;