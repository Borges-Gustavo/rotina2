import {db} from './firebase.js';
import{ref, push, get, update, remove} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-database.js";


const filmes = ref(db, 'filmes/');

export function createFilme(filme, nota) {
    return push(filmes, {  filme, nota  });
}

export function getFilmes(filme) {
    return get(filmes);
}

export function updateFilme(id, filme, nota) {
    const filmeRef = ref(db, "filmes/" + id);
    return update(filmeRef, { filme, nota  });
}

export function deleteFilme(id) {
    const filmeRef = ref(db, "filmes/" + id);
    return remove(filmeRef);
} 