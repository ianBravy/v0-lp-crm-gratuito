"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { ConversionPopup } from "@/components/conversion-popup";
import { useConversionPopup } from "@/hooks/use-conversion-popup";
import { CountdownHeader } from "@/components/countdown-header";
import { FloatingCTA } from "@/components/floating-cta";
import { FAQSection } from "@/components/faq-section";
import { AnimatedCounter } from "@/components/animated-counter";
import { GTMEvents, gtmEvent } from "@/components/gtm-events";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Dados dos depoimentos (simplificados para apenas imagens)
const testimonials = [
    {
        thumb: 'https://t9013332252.p.clickup-attachments.com/t9013332252/bbc5ba3b-8941-468d-8712-3c3c585e77c5/Screenshot%202025-06-14%20at%2022.06.56.png',
        name: 'Junior Renke',
        tag: '@junior.renke',
    },


    {
        thumb: 'https://t9013332252.p.clickup-attachments.com/t9013332252/52db8103-40ba-4188-8c62-10ce27dc764b/Screenshot%202025-06-14%20at%2022.05.03.png',
        name: 'Rodrigo Bindes',
        tag: '@rodrigobindes',
    },
    {
        thumb: 'https://t9013332252.p.clickup-attachments.com/t9013332252/2f6f0f73-9f20-4a1d-b499-d476a7d5db92/Screenshot%202025-06-14%20at%2022.05.16.png',
        name: 'Pablo Marçal',
        tag: '@pablomarcal1',
    },
    {
        thumb: 'https://t9013332252.p.clickup-attachments.com/t9013332252/db435d91-d15e-4e78-a822-5f4839a563f1/Screenshot%202025-06-14%20at%2022.05.27.png',
        name: 'Cadu Neiva',
        tag: '@caduneiva',
    },
    {
        thumb: 'https://t9013332252.p.clickup-attachments.com/t9013332252/dadbc568-60b0-4c1a-b06a-13adb2b8a95d/Screenshot%202025-06-14%20at%2022.05.37.png',
        name: 'Rafa Brito',
        tag: '@rafabri7o',
    },
    {
        thumb: 'https://t9013332252.p.clickup-attachments.com/t9013332252/761ff655-6251-4624-a1e0-431f3d551a25/Screenshot%202025-06-14%20at%2022.05.48.png',
        name: 'Marcos Paulo',
        tag: '@eusoumarcospaulo',
    },
    {
        thumb: 'https://t9013332252.p.clickup-attachments.com/t9013332252/1e499328-ce75-4726-8c22-3a6213d6c5c3/Screenshot%202025-06-14%20at%2022.05.59.png',
        name: 'Cris Franklin',
        tag: '@crisfranklin1',
    },
    {
        thumb: 'https://t9013332252.p.clickup-attachments.com/t9013332252/15619bfe-06ef-4e58-9cc3-4a45318bcf69/image.png',
        name: 'Rafael Alencar',
        tag: '@rafaalencar',
    },
    {
        thumb: 'https://t9013332252.p.clickup-attachments.com/t9013332252/ebccea96-a554-40fd-99b8-a1b26ddb8f05/Screenshot%202025-06-14%20at%2022.06.28.png',
        name: 'Igor Moraes',
        tag: '@igormoraes',
    },
    {
        thumb: 'https://t9013332252.p.clickup-attachments.com/t9013332252/c0f9139e-db11-4ae3-b25b-620823df6765/Screenshot%202025-06-14%20at%2022.06.44.png',
        name: 'Marcello Safe',
        tag: '@marcellosafe',
    },
];

// Dados do FAQ
const faqItems = [
    {
        question: "Como a IA vai vender para mim?",
        answer: "Nossa IA atua como um vendedor virtual 24/7, qualificando leads, agendando reuniões e preparando resumos detalhados para você. Ela usa o método GPCT para identificar oportunidades reais de negócio.",
    },
    {
        question: "A IA realmente entende o contexto da venda?",
        answer: "Sim! Nossa IA foi treinada com milhares de conversas de vendas reais e utiliza o método GPCT (Goals, Plans, Challenges, Timeline) para entender profundamente as necessidades do cliente e qualificar leads de forma precisa.",
    },
    {
        question: "Quanto tempo leva para a IA começar a vender?",
        answer: "Em até 24 horas após a configuração inicial, sua IA já estará conversando com leads e qualificando oportunidades. O processo de configuração é simples e guiado, não exigindo conhecimento técnico.",
    },
    {
        question: "Como a IA se integra com meu processo atual?",
        answer: "A IA se integra perfeitamente com WhatsApp, Google Calendar e seu CRM. Ela captura leads, agenda reuniões e envia resumos qualificados diretamente para sua equipe, mantendo todo o processo organizado.",
    },
    {
        question: "O que acontece se a IA não conseguir vender?",
        answer: "Oferecemos garantia de 7 dias. Se você não ficar satisfeito com os resultados, devolvemos 100% do seu dinheiro. Além disso, nossa IA aprende e melhora com cada interação, aumentando suas chances de sucesso ao longo do tempo.",
    },
];

export default function NewIa() {
    const [isLoaded, setIsLoaded] = useState(false);
    const { isOpen, openPopup, closePopup, handleSubmit } =
        useConversionPopup();
    const currentYear = new Date().getFullYear();

    // Criar data alvo para o contador (14/06/2024 às 19h)
    const targetDate = new Date("2025-06-16T19:00:00");

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const scrollToOffer = () => {
        // Enviar evento para GTM
        gtmEvent("scroll_to_offer", {
            event_category: "engagement",
            event_label: "scroll_to_offer_button",
        });

        const ofertaSection = document.getElementById("oferta");
        if (ofertaSection) {
            ofertaSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handlePopupOpen = () => {
        // Enviar evento para GTM
        gtmEvent("popup_opened", {
            event_category: "conversion",
            event_label: "conversion_popup_opened",
        });
        openPopup();
    };

    const handleFormSubmit = (data: {
        name: string;
        email: string;
        phone: string;
    }) => {
        // Enviar evento para GTM
        gtmEvent("form_submitted", {
            event_category: "conversion",
            event_label: "lead_form_submitted",
            user_data: {
                email: data.email,
                phone: data.phone,
            },
        });
        handleSubmit(data);
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#18181b]">
            {/* Componente para eventos GTM */}
            <GTMEvents />

            {/* Barra de contador no topo */}
            <CountdownHeader
                targetDate={targetDate}
                onButtonClick={() => {
                    gtmEvent("header_cta_clicked", {
                        event_category: "engagement",
                        event_label: "header_implementar_IA",
                    });
                    scrollToOffer();
                }}
            />

            {/* Popup de conversão */}
            <ConversionPopup
                checkoutUrl="https://payfast.greenn.com.br/91615/offer/3AxMxt"
                isOpen={isOpen}
                onClose={closePopup}
                onSubmit={handleFormSubmit}
            />

            {/* Botão flutuante */}
            <FloatingCTA
                onClick={() => {
                    gtmEvent("floating_cta_clicked", {
                        event_category: "engagement",
                        event_label: "floating_button",
                    });
                    scrollToOffer();
                }}
            />

            <main className="flex-1">
                <section className="py-20 md:py-28 overflow-hidden relative bg-[#18181b]">
                    {/* Background elements */}
                    <div className="absolute inset-0 overflow-hidden bg-[#18181b]">
                        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#ef4743]/30 opacity-50 blur-3xl"></div>
                        <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-[#ef4743]/20 opacity-50 blur-3xl"></div>
                    </div>
                    <div className="container mx-auto px-4 relative bg-[#18181b]">
                        <div className="max-w-3xl mx-auto bg-[#18181b]">
                            <div className="flex flex-col gap-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: isLoaded ? 1 : 0,
                                        y: isLoaded ? 0 : 20,
                                    }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="inline-flex items-center rounded-full border border-[#27272a] bg-[#232326] px-3 py-1 text-sm font-medium shadow-sm self-start"
                                >
                                    <span className="flex h-2 w-2 rounded-full bg-[#ef4743] mr-2"></span>
                                    <span className="bg-gradient-to-r from-[#ef4743] to-[#ff7a59] bg-clip-text text-transparent">
                                        Lançamento com 90%OFF
                                    </span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: isLoaded ? 1 : 0,
                                        y: isLoaded ? 0 : 20,
                                    }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl"
                                >
                                    <span className="bg-gradient-to-r from-white to-[#f4f4f5] bg-clip-text text-transparent">
                                        IA que Qualifica,{" "}
                                    </span>
                                    <span className="inline-block py-2 bg-gradient-to-r from-[#ef4743] to-[#ff7a59] bg-clip-text text-transparent">
                                        Agenda e Entrega{" "}
                                    </span>
                                    <span className="bg-gradient-to-r from-white to-[#f4f4f5] bg-clip-text text-transparent">
                                        {" "}
                                        o Lead Pronto pra Fechar{" "}
                                    </span>
                                    <br />
                                    <span className="bg-gradient-to-r from-white to-[#f4f4f5] bg-clip-text text-transparent">
                                        (Método SDR + GPCT)
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: isLoaded ? 1 : 0,
                                        y: isLoaded ? 0 : 20,
                                    }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="text-xl text-[#f4f4f5] max-w-[600px]"
                                >
                                    Chega de perder tempo com leads frios. Nossa
                                    IA conversa, qualifica, agenda a
                                    reunião e entrega o resumo mastigado pro seu
                                    closer.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: isLoaded ? 1 : 0,
                                        y: isLoaded ? 0 : 20,
                                    }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="flex flex-col sm:flex-row gap-4 mt-4"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Button
                                            className="bg-[#ef4743] hover:bg-[#ff7a59] text-white rounded-full text-base font-medium px-6 py-3 h-auto group"
                                            onClick={() => {
                                                gtmEvent("hero_cta_clicked", {
                                                    event_category:
                                                        "conversion",
                                                    event_label:
                                                        "hero_implementar_IA",
                                                });
                                                scrollToOffer();
                                            }}
                                        >
                                            Ativar meu Agente de IA
                                            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </motion.div>

                                    <div className="flex items-center gap-2 text-sm text-[#f4f4f5]">
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    className="h-4 w-4 fill-[#ef4743] text-[#ef4743]"
                                                />
                                            ))}
                                        </div>
                                        <span>4.9/5 (7k+ avaliações)</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: isLoaded ? 1 : 0,
                                        y: isLoaded ? 0 : 20,
                                    }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
                                >
                                    {[
                                        "Qualificação automatizada via IA (GPT)",
                                        "Agendamento direto na agenda do time",
                                        "Resumo da call pronto no CRM pro Closer",
                                        "Integração com WhatsApp, Google Calendar e CRM",
                                        "Mais de 7.000 times comerciais acelerados",
                                    ].map((item, index) => (
                                        <motion.div
                                            key={item}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{
                                                opacity: isLoaded ? 1 : 0,
                                                x: isLoaded ? 0 : -20,
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.6 + index * 0.1,
                                            }}
                                            className="flex items-center gap-2"
                                        >
                                            <div className="text-[#ef4743] flex items-center justify-center rounded-full bg-[#232326] h-5 w-5">
                                                <Check className="h-3 w-3" />
                                            </div>
                                            <p className="text-sm text-[#f4f4f5]">
                                                {item}
                                            </p>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: isLoaded ? 1 : 0 }}
                                    transition={{ duration: 0.5, delay: 1 }}
                                    className="flex gap-4 mt-8"
                                >
                                    <div className="flex -space-x-2">
                                        {[
                                            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6077.JPG-Jf2gEOPY7rV15nFAeqk73xbCzg9tSg.jpeg",
                                            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6079.JPG-rFrdIXc1iBYkBqsQXOmLqDiFEblpE1.jpeg",
                                            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6075.jpg-sgAPism9ZN0bpGBjF2Rkw83GMTFD7i.jpeg",
                                            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6076.jpg-b3VMx89Aj5AAX8QoXSWCqVrj6I26XB.jpeg",
                                        ].map((src, index) => (
                                            <div
                                                key={index}
                                                className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative"
                                            >
                                                <Image
                                                    src={
                                                        src ||
                                                        "/placeholder.svg"
                                                    }
                                                    alt={`Usuário ${index + 1}`}
                                                    fill
                                                    className="object-cover"
                                                    sizes="32px"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-sm text-[#f4f4f5]">
                                        <span className="font-medium">
                                            <AnimatedCounter
                                                end={9000}
                                                duration={2500}
                                            />
                                        </span>{" "}
                                        empresas que já automatizaram seu processo de vendas com a nossa IA
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-[#232326]">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col items-center text-center gap-4 mb-12">
                            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                                Organize, Qualifique e Agende com IA
                            </h2>
                            <p className="text-xl text-[#f4f4f5] max-w-[800px]">
                                Elimine gargalos do seu processo de vendas.
                                Nossa IA faz a triagem dos leads, agenda automaticamente a reunião e
                                envia um resumo detalhado para o closer com os
                                principais pontos da qualificação.
                            </p>
                        </div>

                        {/* Seções de recursos com layout padronizado */}
                        <div className="space-y-24">
                            {/* Pipeline de Vendas */}
                            <div className="grid md:grid-cols-2 gap-10 items-center">
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-3xl font-bold text-white">
                                        Sua IA caça, filtra e entrega só quem tem chance real de fechar.
                                    </h3>
                                    <p className="text-lg text-[#f4f4f5] leading-relaxed">
                                        Deixe a IA mostrar: quem é oportunidade,
                                        quem já marcou e quem não merece seu
                                        tempo.
                                    </p>
                                </div>
                                <div className="rounded-xl overflow-hidden relative shadow-lg">
                                    <div className="relative w-full aspect-[16/10]">
                                        <Image
                                            src="https://t9013332252.p.clickup-attachments.com/t9013332252/aeac61fa-e00c-4b3a-9bf7-e59c013a9b6d/af62cd51-a2d4-4f46-a975-da96475e7f78.png"
                                            alt="Pipeline de Vendas"
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Automações estratégicas */}
                            <div className="grid md:grid-cols-2 gap-10 items-center">
                                <div className="order-2 md:order-1 rounded-xl overflow-hidden relative shadow-lg">
                                    <div className="relative w-full aspect-[16/10]">
                                        <Image
                                            src="https://t9013332252.p.clickup-attachments.com/t9013332252/4a4c46c3-116a-49ca-b1a4-0cee218211d2/image.png"
                                            alt="Automações estratégicas"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="order-1 md:order-2 flex flex-col gap-6">
                                    <h3 className="text-3xl font-bold text-white">
                                    Chega de perder tempo com curioso.
                                    </h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="text-[#00c875] flex items-center justify-center rounded-sm mt-1">
                                                <Check className="h-6 w-6" />
                                            </div>
                                            <p className="text-lg text-[#f4f4f5]">
                                                IA captura e cadastra os leads
                                                automaticamente
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="text-[#00c875] flex items-center justify-center rounded-sm mt-1">
                                                <Check className="h-6 w-6" />
                                            </div>
                                            <p className="text-lg text-[#f4f4f5]">
                                                 o lead aplicando o
                                                método GPCT
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="text-[#00c875] flex items-center justify-center rounded-sm mt-1">
                                                <Check className="h-6 w-6" />
                                            </div>
                                            <p className="text-lg text-[#f4f4f5]">
                                                Agenda a reunião direto na sua
                                                agenda (Google Calendar ou CRM)
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="text-[#00c875] flex items-center justify-center rounded-sm mt-1">
                                                <Check className="h-6 w-6" />
                                            </div>
                                            <p className="text-lg text-[#f4f4f5]">
                                                Envia mensagens personalizadas
                                                via WhatsApp com IA GPT
                                            </p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="text-[#00c875] flex items-center justify-center rounded-sm mt-1">
                                                <Check className="h-6 w-6" />
                                            </div>
                                            <p className="text-lg text-[#f4f4f5]">
                                                Gera e entrega o resumo da
                                                qualificação pro Closer, antes
                                                da call
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Seção de Bônus */}
                <section className="py-20 bg-[#18181b]">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col items-center text-center gap-4 mb-16">
                            <div className="inline-flex items-center rounded-full border border-[#27272a] bg-[#232326] px-3 py-1 text-sm font-medium text-[#ef4743] shadow-sm">
                                <span className="flex h-2 w-2 rounded-full bg-[#ef4743] mr-2"></span>
                                Bônus Exclusivos
                            </div>
                            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                                Dashboard de Qualificação e Agendamentos em
                                Tempo Real
                            </h2>
                            <p className="text-xl text-[#f4f4f5] max-w-[800px]">
                                Além da estrutura completa, você recebe estes
                                materiais prontos para acelerar seus resultados
                            </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {/* Bônus 1 */}
                            <div className="group relative overflow-hidden rounded-xl border border-[#27272a] bg-[#232326] p-6 transition-all hover:shadow-md">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#ef4743]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute top-4 right-4 bg-[#ef4743]/10 text-[#ef4743] px-2 py-1 rounded-md text-xs font-medium">
                                    Valor: R$ 97
                                </div>
                                <div className="relative">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#232326]">
                                        <svg
                                            className="h-6 w-6 text-[#ef4743]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold text-white">
                                        Modelos de Criativos Validados
                                    </h3>
                                    <p className="text-[#f4f4f5]">
                                        Modelos de anúncios e posts que já foram
                                        testados e aprovados para atrair leads
                                        qualificados.
                                    </p>
                                </div>
                            </div>

                            {/* Bônus 2 */}
                            <div className="group relative overflow-hidden rounded-xl border border-[#27272a] bg-[#232326] p-6 transition-all hover:shadow-md">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#ef4743]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute top-4 right-4 bg-[#ef4743]/10 text-[#ef4743] px-2 py-1 rounded-md text-xs font-medium">
                                    Valor: R$ 97
                                </div>
                                <div className="relative">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#232326]">
                                        <svg
                                            className="h-6 w-6 text-[#ef4743]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold text-white">
                                        Script de Qualificação
                                    </h3>
                                    <p className="text-[#f4f4f5]">
                                        Roteiro completo para qualificar leads e
                                        identificar oportunidades de negócio de
                                        forma eficiente.
                                    </p>
                                </div>
                            </div>

                            {/* Bônus 3 */}
                            <div className="group relative overflow-hidden rounded-xl border border-[#27272a] bg-[#232326] p-6 transition-all hover:shadow-md">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#ef4743]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute top-4 right-4 bg-[#ef4743]/10 text-[#ef4743] px-2 py-1 rounded-md text-xs font-medium">
                                    Valor: R$ 97
                                </div>
                                <div className="relative">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#232326]">
                                        <svg
                                            className="h-6 w-6 text-[#ef4743]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold text-white">
                                        Script para Sessão Estratégica
                                    </h3>
                                    <p className="text-[#f4f4f5]">
                                        Guia passo a passo para conduzir
                                        reuniões estratégicas que convertem em
                                        vendas.
                                    </p>
                                </div>
                            </div>

                            {/* Bônus 4 */}
                            <div className="group relative overflow-hidden rounded-xl border border-[#27272a] bg-[#232326] p-6 transition-all hover:shadow-md">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#ef4743]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute top-4 right-4 bg-[#ef4743]/10 text-[#ef4743] px-2 py-1 rounded-md text-xs font-medium">
                                    Valor: R$ 97
                                </div>
                                <div className="relative">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#232326]">
                                        <svg
                                            className="h-6 w-6 text-[#ef4743]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold text-white">
                                        Apresentação de Vendas
                                    </h3>
                                    <p className="text-[#f4f4f5]">
                                        Template de apresentação profissional
                                        para impressionar seus clientes e fechar
                                        mais negócios.
                                    </p>
                                </div>
                            </div>

                            {/* Bônus 5 */}
                            <div className="group relative overflow-hidden rounded-xl border border-[#27272a] bg-[#232326] p-6 transition-all hover:shadow-md">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#ef4743]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute top-4 right-4 bg-[#ef4743]/10 text-[#ef4743] px-2 py-1 rounded-md text-xs font-medium">
                                    Valor: R$ 297
                                </div>
                                <div className="relative">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#232326]">
                                        <svg
                                            className="h-6 w-6 text-[#ef4743]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold text-white">
                                        Modelo de Proposta
                                    </h3>
                                    <p className="text-[#f4f4f5]">
                                        Template de proposta comercial que
                                        destaca o valor do seu serviço e
                                        facilita a decisão de compra.
                                    </p>
                                </div>
                            </div>

                            {/* Bônus 6 */}
                            <div className="group relative overflow-hidden rounded-xl border border-[#27272a] bg-[#232326] p-6 transition-all hover:shadow-md">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#ef4743]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute top-4 right-4 bg-[#ef4743]/10 text-[#ef4743] px-2 py-1 rounded-md text-xs font-medium">
                                    Valor: R$ 197
                                </div>
                                <div className="relative">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#232326]">
                                        <svg
                                            className="h-6 w-6 text-[#ef4743]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold text-white">
                                        Descritivos de Cargos Comerciais
                                    </h3>
                                    <p className="text-[#f4f4f5]">
                                        Descrições detalhadas de funções para
                                        montar uma equipe comercial de alto
                                        desempenho.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Seção de Preço */}
                <section id="oferta" className="py-20 bg-[#232326]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <div className="flex flex-col items-center text-center gap-4 mb-12">
                                <div className="inline-flex items-center rounded-full border border-[#27272a] bg-[#232326] px-3 py-1 text-sm font-medium text-[#ef4743] shadow-sm">
                                    <span className="flex h-2 w-2 rounded-full bg-[#ef4743] mr-2"></span>
                                    Oferta Especial
                                </div>
                                <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                                    Invista agora no seu sucesso comercial
                                </h2>
                                <p className="text-xl text-[#f4f4f5] max-w-[800px]">
                                    Acesso completo a estrutura com processos,
                                    automações com IA, dashboards e todos os bônus
                                </p>
                            </div>

                            <div className="bg-[#18181b] rounded-xl border border-[#27272a] shadow-sm overflow-hidden">
                                <div className="p-8 md:p-12">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="mb-6">
                                            <div className="text-[#f4f4f5] text-lg mb-1">
                                                De{" "}
                                                <span className="line-through">
                                                    R$ 997,00
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-center gap-2">
                                                <span className="text-5xl md:text-6xl font-bold text-white">
                                                    R$ 97
                                                </span>
                                                <span className="text-xl text-[#f4f4f5]">
                                                    ,00
                                                </span>
                                            </div>
                                            <div className="text-[#f4f4f5] text-lg mt-1">
                                                ou 12x de R$ 10,07
                                            </div>
                                            <div className="text-[#ef4743] font-medium mt-2">
                                                Economize R$ 950,00 (95% de
                                                desconto)
                                            </div>
                                        </div>

                                        <div className="grid gap-4 mb-8 w-full max-w-md">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ef4743]/10">
                                                    <Check className="h-4 w-4 text-[#ef4743]" />
                                                </div>
                                                <p className="text-[#f4f4f5]">
                                                    Acesso vitalício à
                                                    plataforma
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ef4743]/10">
                                                    <Check className="h-4 w-4 text-[#ef4743]" />
                                                </div>
                                                <p className="text-[#f4f4f5]">
                                                    Todos os templates e
                                                    automações
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ef4743]/10">
                                                    <Check className="h-4 w-4 text-[#ef4743]" />
                                                </div>
                                                <p className="text-[#f4f4f5]">
                                                    6 bônus exclusivos (valor:
                                                    R$ 882)
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ef4743]/10">
                                                    <Check className="h-4 w-4 text-[#ef4743]" />
                                                </div>
                                                <p className="text-[#f4f4f5]">
                                                    Suporte por 30 dias
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-4 w-full max-w-md">
                                            <Button
                                                className="bg-[#ef4743] hover:bg-[#ff7a59] text-white rounded-full py-6 text-lg font-medium h-auto"
                                                onClick={() => {
                                                    gtmEvent(
                                                        "purchase_intent",
                                                        {
                                                            event_category:
                                                                "conversion",
                                                            event_label:
                                                                "pricing_section_cta",
                                                            value: 47,
                                                            currency: "BRL",
                                                        }
                                                    );
                                                    handlePopupOpen();
                                                }}
                                            >
                                                Ativar meu Agente de IA
                                                <ChevronRight className="ml-2 h-5 w-5" />
                                            </Button>

                                            <div className="flex items-center justify-center gap-4 text-sm text-[#f4f4f5]">
                                                <div className="flex items-center gap-1">
                                                    <svg
                                                        className="h-4 w-4"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                        />
                                                    </svg>
                                                    <span>Compra segura</span>
                                                </div>
                                                <div className="flex items-center justify-center gap-1">
                                                    <svg
                                                        className="h-4 w-4"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                                        />
                                                    </svg>
                                                    <span>
                                                        Parcelamento em até 12x
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Nova Seção de Prova Social com Carrossel apenas de imagens - MOVIDA PARA O FINAL */}
                <section className="py-20 bg-[#18181b]">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col items-center text-center gap-4 mb-16">
                            <div className="inline-flex items-center rounded-full border border-[#27272a] bg-[#232326] px-3 py-1 text-sm font-medium text-[#ef4743] shadow-sm">
                                <span className="flex h-2 w-2 rounded-full bg-[#ef4743] mr-2"></span>
                                Usuários
                            </div>
                            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                                Usado pelos maiores especialistas
                            </h2>
                            <p className="text-xl text-[#f4f4f5] max-w-[800px]">
                                Veja quem já está utilizando nossa IA para aumentar suas vendas
                        
                            </p>
                        </div>

                        <div className="mx-auto">
                            <Carousel
                                responsive={{
                                    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
                                    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
                                    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
                                    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
                                }}
                                infinite={true}
                                showDots={false}
                                arrows={false}
                                autoPlay={true}
                                autoPlaySpeed={4000}
                                transitionDuration={500}
                                className="w-full max-w-4xl mx-auto"
                                itemClass="px-4"
                                containerClass="gap-4"
                            >
                                {testimonials.slice(0, 5).map((item) => (
                                    <div key={item.name} className="flex flex-col items-center">
                                        <img
                                            src={item.thumb}
                                            alt={item.name}
                                            className="rounded-xl object-cover mb-8 shadow-lg"
                                            style={{ width: 260, height: 340, objectFit: 'cover', objectPosition: 'center' }}
                                        />
                                        <span className="text-white font-bold text-xl whitespace-nowrap mt-2 text-center block">{item.name}</span>
                                        <span className="text-[#b0b0b0] text-center text-base italic block">{item.tag}</span>
                                    </div>
                                ))}
                            </Carousel>
                        </div>

                        {/* Estatísticas */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col items-center text-center"
                            >
                                <AnimatedCounter
                                    end={87}
                                    suffix="%"
                                    className="text-4xl font-bold text-[#ef4743] mb-2"
                                />
                                <p className="text-[#f4f4f5]">
                                    Aumento médio na taxa de conversão
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="flex flex-col items-center text-center"
                            >
                                <AnimatedCounter
                                    end={9000}
                                    className="text-4xl font-bold text-[#ef4743] mb-2"
                                />
                                <p className="text-[#f4f4f5]">
                                    Empresas utilizando nossa IA
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="flex flex-col items-center text-center"
                            >
                                <AnimatedCounter
                                    end={65}
                                    suffix="%"
                                    className="text-4xl font-bold text-[#ef4743] mb-2"
                                />
                                <p className="text-[#f4f4f5]">
                                    Redução no tempo de fechamento
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex flex-col items-center text-center"
                            >
                                <AnimatedCounter
                                    end={4.9}
                                    suffix="/5"
                                    decimals={1}
                                    className="text-4xl font-bold text-[#ef4743] mb-2"
                                />
                                <p className="text-[#f4f4f5]">
                                    Avaliação média dos clientes
                                </p>
                            </motion.div>
                        </div>

                        {/* CTA */}
                        <div className="mt-16 flex justify-center">
                            {/* Botão removido conforme solicitado */}
                        </div>
                    </div>
                </section>

                {/* Seção de FAQ */}
                <section className="py-16 bg-[#18181b]">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col items-center text-center gap-4 mb-12">
                            <div className="inline-flex items-center rounded-full border border-[#27272a] bg-[#232326] px-3 py-1 text-sm font-medium text-[#ef4743] shadow-sm">
                                <span className="flex h-2 w-2 rounded-full bg-[#ef4743] mr-2"></span>
                                Dúvidas Frequentes
                            </div>
                            <h2 className="text-3xl font-bold text-white sm:text-4xl">
                                Perguntas Frequentes
                            </h2>
                            <p className="text-lg text-[#f4f4f5] max-w-[800px]">
                                Tire suas dúvidas sobre como podemos transformar
                                seu processo comercial
                            </p>
                        </div>

                        <FAQSection items={faqItems} />

                        <div className="mt-12 flex justify-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    className="bg-[#ef4743] hover:bg-[#ff7a59] text-white rounded-full py-3 px-6 text-base font-medium h-auto"
                                    onClick={() => {
                                        gtmEvent("faq_cta_clicked", {
                                            event_category: "conversion",
                                            event_label: "faq_section_cta",
                                        });
                                        scrollToOffer();
                                    }}
                                >
                                    Quero ativar meu Agente AI agora
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Rodapé */}
            <footer className="py-8 bg-[#18181b] border-t border-[#27272a]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <p className="text-[#f4f4f5] text-sm">
                                © {currentYear} Bravy School. Todos os direitos
                                reservados.
                            </p>
                        </div>
                        <div className="flex items-center gap-6">
                            <a
                                href="#"
                                className="text-[#f4f4f5] hover:text-[#ef4743] text-sm transition-colors"
                            >
                                Termos de Uso
                            </a>
                            <a
                                href="#"
                                className="text-[#f4f4f5] hover:text-[#ef4743] text-sm transition-colors"
                            >
                                Política de Privacidade
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
