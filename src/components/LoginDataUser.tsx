import { Database } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';



export default function LoginData(){

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //const userNoRegistered = () => {
            //navigate("registro-usuario")
        //}


    }
    return (
        <form onSubmit={handleLogin} className="w-full max-w-md min-h-[450px] shadow-2xl flex flex-col p-10 rounded-xl  bg-slate-900">
            
            <div className="w-full flex items-center justify-center text-center mb-10">
                <h2 className="text-white register-font text-2xl flex items-center gap-3 tracking-wider">
                    <Database size={28} className="database-icon" />
                    Dados de Login 
                </h2>
            </div>

            {/* 3. A DIV RESTAURADA: Agrupando os inputs e o botão corretamente */}
            <div className="flex w-full flex-col gap-5">
                
                <div className="flex flex-col gap-2">
                    <label className="text-white text-sm ml-1">Seu e-mail</label>
                    <input 
                        className="w-full h-12 p-3 rounded-md bg-data-input text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-yellow-500 transition-all border border-slate-600" 
                        type="email" 
                        placeholder="seu@email.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-white text-sm ml-1">Informar senha</label>
                    <input 
                        className="w-full h-12 p-3 rounded-md bg-data-input text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-yellow-500 transition-all border border-slate-600" 
                        type="password" 
                        placeholder="******-23**hk**"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* 4. UX AJUSTADA: Botão agora diz "Entrar" */}
                <button type="submit" className="w-full h-14 mt-4 bg-yellow-500 hover:bg-yellow-800 cursor-pointer text-white font-bold rounded-md transition-all shadow-lg active:scale-95">
                    Entrar
                </button>

                <button onClick={() => navigate("/registro-usuario")}
                className="w-full h-14 bg-red-500 hover:bg-red-950 cursor-pointer text-white font-bold rounded-md transition-all shadow-lg active:scale-95">
                    Não tem conta ainda?
                </button>

            </div>
        </form>
    );
}