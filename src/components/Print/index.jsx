import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: { margin: "auto", flexDirection: "row" },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: { margin: "auto", padding: 5 },
  // Contoh data untuk kolom
  data: [
    { kolom1: "Data 1", kolom2: "Data 2", kolom3: "Data 3", kolom4: "Data 4" },
    { kolom1: "Data 5", kolom2: "Data 6", kolom3: "Data 7", kolom4: "Data 8" },
    {
      kolom1: "Data 9",
      kolom2: "Data 10",
      kolom3: "Data 11",
      kolom4: "Data 12",
    },
  ],
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Kolom 1</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Kolom 2</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Kolom 3</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Kolom 4</Text>
          </View>
        </View>
        {styles.data.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.kolom1}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.kolom2}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.kolom3}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.kolom4}</Text>
            </View>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);
export default MyDocument;
