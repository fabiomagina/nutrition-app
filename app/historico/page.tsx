"use client"

import HistoricoDoMes from "@/components/historico/HistoricoDoMes";
import Layout from "@/components/ui/templates/Layout";

export default function Historico() {
    return (
        <Layout type="secondary" headerText="Refeições do Dia">
            <HistoricoDoMes />
        </Layout>
    )
}