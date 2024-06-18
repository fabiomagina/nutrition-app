import { CardWrapper } from "@/components/auth/card-wrapper";
import Layout from "@/components/ui/templates/Layout";

const Contato = () => {
    return (
        <Layout headerText="Contato" type="secondary">
            <div className="w-full flex h-full items-center md:mt-[-3rem] justify-center">

                <CardWrapper headerLabel="Contato">
                    <div className="mx-4 mb-8">
                        <p className="text-lg">Entre em contato com a nutricionista através do e-mail:</p>
                        <p className="w-full text-center mt-1">
                            <a href={''} className="text-blue-950 font-bold">
                                contato@nutricionista.com.br
                            </a>
                        </p>
                        <p className="text-lg mt-4">Fale conosco através do telefone:</p>
                        <p className="w-full text-center mt-1">Whatsapp:
                            <a href={''} className="text-blue-950 font-bold">
                                +55 11 97762-6371
                            </a>
                        </p>
                    </div>
                </CardWrapper>
            </div>
        </Layout>
    );
};

export default Contato;