import { PDFDownloadLink } from "@react-pdf/renderer";
import Blog from "../Blog";
import { Button } from "flowbite-react";
import FooterPage from "../../SharedFile/FooterFile/FooterPage";

const BlogMainPage = () => {
    return (
        <div className="pb-4">
            <Blog></Blog>

            <div className="mb-12">
                <PDFDownloadLink document={<Blog></Blog>} fileName="FORM" >
                    {({ loading }) => (loading ? <Button className="text-white">Download Document Pdf......</Button> : <Button className="text-white">Download</Button>)}
                </PDFDownloadLink>
            </div>

            <FooterPage></FooterPage>
        </div>
    );
};

export default BlogMainPage;