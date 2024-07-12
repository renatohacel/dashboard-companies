import { AccordionFaqs } from "./components/AcordionFaqs"

const PageFaqs = () => {
    return (
        <div className="max-w-4xl mx-auto bg-background shadow-md rounded-lg p-6">
            <h2 className="text-3xl mb-8">FAQS</h2>
            <div className="mb-5">
                <p>Bienvenidos a nuestra sección de "Preguntas Frecuentes" (FAQ) diseñanada especificamente para brindarte respuestas rápidas y claras sobre el dashboard para empresas que hemos desarrollado con pasión y dedicación.</p>
                <p>En nuestra página de FAQs, encontrarás una recopilación de las preguntas más comunes que nuestros usuarios suelen hacer sobre el funcionamiento, características y uso de nuestro dashboard. Desde cómo registrate en la plataforma hasta cómo aprovechar al máximo sus funciones, hemos reunido una lista exhaustiva de interrogantes para ofrecerte la mejor experiencia posible.</p>
                <p>Nuestro equipo se ha esforzado para proporcionar respuestas detalladas y fáciles de entender para garantizar que encuentres la información que necesitas para garantizar que encuentres la información que necesitas de manera rápida y sencilla. Si no encuentras la respuesta que buscas, no dudes en contactarnos. Estamos aquí para ayudarte en cada paso del camino.</p>
                <p>Explora nuestras FAQs y descubre cómo nuestro dashboard puede impulsar la eficiencia y el éxito de tu empresa.</p>
            </div>
            <AccordionFaqs />
        </div>
    )
}

export default PageFaqs