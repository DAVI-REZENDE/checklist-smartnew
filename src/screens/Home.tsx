import { ScrollView, Text, View } from "react-native";
import { ReportCard } from "../components/ReportCard";

export function Home() {
  return (
    <ScrollView className="flex-1 bg-zinc-100 p-4 gap-2">
      <ReportCard />
      <ReportCard />
      <ReportCard />
      <ReportCard />
      <ReportCard />
      <ReportCard />
      <ReportCard />
    </ScrollView>
  )
}