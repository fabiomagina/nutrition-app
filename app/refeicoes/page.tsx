import RefeicoesDoDia from "@/components/refeicoes/RefeicoesDoDia";
import Layout from "@/components/ui/templates/Layout";

export default function Refeicoes() {
    return (
        <Layout type="secondary" headerText="Refeições do Dia">
            <RefeicoesDoDia />
        </Layout>
    )
}