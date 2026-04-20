/* eslint-disable react/no-unknown-property */
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

type PastPerf = { client: string; title: string; outcome?: string };
export type CapData = {
  companyName: string;
  headline: string;
  summary: string;
  naics: string[];
  cage?: string;
  uei?: string;
  core: string[];
  differentiators: string[];
  pastPerf: PastPerf[];
  contacts: { name: string; title?: string; email?: string; phone?: string }[];
  footerLegal?: string;
};

const styles = StyleSheet.create({
  page: { padding: 36, fontSize: 11, fontFamily: "Helvetica" },
  h1: { fontSize: 20, marginBottom: 6, fontWeight: 700 },
  h2: { fontSize: 13, marginTop: 10, marginBottom: 4, fontWeight: 700 },
  row: { display: "flex", flexDirection: "row", gap: 12 },
  col: { flexGrow: 1 },
  bullet: { marginLeft: 10, marginBottom: 3 },
  metaRow: {
    marginTop: 6,
    marginBottom: 6,
    display: "flex",
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
  },
  meta: { border: 1, borderRadius: 4, padding: 6, fontSize: 10 },
  footer: { position: "absolute", bottom: 24, left: 36, right: 36, fontSize: 8, color: "#666" },
});

export default function CapabilityPDF({ data }: { data: CapData }) {
  const d = data;
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <Text style={styles.h1}>{d.companyName}</Text>
        <Text>{d.headline}</Text>

        <View style={styles.metaRow}>
          <Text style={styles.meta}>CAGE: {d.cage ?? "—"}</Text>
          <Text style={styles.meta}>UEI: {d.uei ?? "—"}</Text>
          <Text style={styles.meta}>NAICS: {d.naics.join(", ") || "—"}</Text>
        </View>

        <Text style={styles.h2}>Summary</Text>
        <Text>{d.summary}</Text>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.h2}>Core Competencies</Text>
            {d.core.map((x, i) => (
              <Text key={i} style={styles.bullet}>• {x}</Text>
            ))}
            <Text style={styles.h2}>Differentiators</Text>
            {d.differentiators.map((x, i) => (
              <Text key={i} style={styles.bullet}>• {x}</Text>
            ))}
          </View>

          <View style={styles.col}>
            <Text style={styles.h2}>Past Performance</Text>
            {d.pastPerf.length === 0 && <Text>—</Text>}
            {d.pastPerf.map((p, i) => (
              <View key={i} style={{ marginBottom: 6 }}>
                <Text style={{ fontWeight: 700 }}>{p.client}</Text>
                <Text>{p.title}</Text>
                {p.outcome && <Text style={{ color: "#444" }}>{p.outcome}</Text>}
              </View>
            ))}

            <Text style={styles.h2}>Primary Contacts</Text>
            {d.contacts.map((c, i) => (
              <View key={i} style={{ marginBottom: 4 }}>
                <Text style={{ fontWeight: 700 }}>{c.name}</Text>
                <Text>{[c.title, c.email, c.phone].filter(Boolean).join(" • ")}</Text>
              </View>
            ))}
          </View>
        </View>

        <Text style={styles.footer}>
          {d.footerLegal ??
            "ITAR/EAR awareness: Do not include export-controlled technical data. Capability statement is for market research and capture planning."}
        </Text>
      </Page>
    </Document>
  );
}
