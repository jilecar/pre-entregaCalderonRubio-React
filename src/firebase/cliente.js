import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig={
    apiKey: "AIzaSyD4WOnxlHsA_B2vQasmyrXhuvK3JoqnKwo",
    authDomain: "ecommer-jimmycalderon.firebaseapp.com",
    projectId: "ecommer-jimmycalderon",
    storageBucket: "ecommer-jimmycalderon.appspot.com",
    messagingSenderId: "791230908463",
    appId: "1:791230908463:web:9178272dc5931f4b5f5eda",
    measurementId: "G-Y4CESS6TTG"
};

const app=initializeApp(firebaseConfig);
export const db=getFirestore(app)