import { trpc } from "@/utils/trpc";

const DlCVButton = () => {
    const { data } = trpc.mock.getMockCV.useQuery();

    const handleDownload = () => {
        if (!data) return;

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "mock_cv.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    return (
        <button onClick={handleDownload} className="px-4 py-2 bg-blue-500 text-white rounded">
        Download CV
      </button>
    );
  };
  
  export default DlCVButton;