import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const AstroLocaHoroscopeApp = () => {
    const [sign, setSign] = useState("");
    const [prediction, setPrediction] = useState("");
    const [imageSrc, setImageSrc] = useState("/images/astrology.jpg");

    const handlePrediction = () => {
        const lowerSign = sign.toLowerCase();
        let message = "";
        switch (lowerSign) {
            case "aries":
                message = "Esta semana, Aries, sentirás una energía renovada para enfrentar desafíos.";
                break;
            case "tauro":
                message = "Tauro, es un buen momento para cuidar tus finanzas y disfrutar de los pequeños placeres.";
                break;
            case "geminis":
                message = "Géminis, tus habilidades comunicativas estarán en su punto máximo. ¡Aprovecha!";
                break;
            case "cancer":
                message = "Cáncer, es hora de prestar atención a tu vida emocional y fortalecer tus relaciones.";
                break;
            case "leo":
                message = "Leo, tu carisma brillará esta semana. Es momento de liderar con confianza.";
                break;
            case "virgo":
                message = "Virgo, tu organización te llevará al éxito. Mantén el enfoque.";
                break;
            case "libra":
                message = "Libra, busca el equilibrio en todas tus decisiones esta semana.";
                break;
            case "escorpio":
                message = "Escorpio, tu intensidad emocional te ayudará a descubrir verdades ocultas.";
                break;
            case "sagitario":
                message = "Sagitario, es un buen momento para explorar nuevos horizontes.";
                break;
            case "capricornio":
                message = "Capricornio, tu perseverancia será recompensada. Mantén el esfuerzo.";
                break;
            case "acuario":
                message = "Acuario, tus ideas innovadoras serán muy bien recibidas esta semana.";
                break;
            case "piscis":
                message = "Piscis, es un buen momento para dejar fluir tu creatividad.";
                break;
            default:
                message = "Parece que no has ingresado un signo válido. Inténtalo de nuevo.";
                setImageSrc("/images/error.jpg");
        }
        setPrediction(message);
    };

    return (
        <div className="flex flex-col items-center gap-4 p-4">
            <Card className="w-full max-w-md p-4">
                <CardContent className="flex flex-col items-center gap-4">
                    <h2 className="text-2xl font-bold">Pitonisa Astro-Loca</h2>
                    <input
                        type="text"
                        placeholder="Ingresa tu signo del zodiaco"
                        value={sign}
                        onChange={(e) => setSign(e.target.value)}
                        className="p-2 border rounded-xl w-full"
                    />
                    <Button onClick={handlePrediction} className="w-full">Ver Predicción</Button>
                    <p className="text-center mt-4">{prediction}</p>
                    <Image src={imageSrc} alt="Astrology" width={300} height={200} className="rounded-2xl" />
                </CardContent>
            </Card>
        </div>
    );
};

export default AstroLocaHoroscopeApp;
