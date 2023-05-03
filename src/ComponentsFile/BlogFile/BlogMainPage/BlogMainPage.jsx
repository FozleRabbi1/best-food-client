import Blog from "../Blog";
import FooterPage from "../../SharedFile/FooterFile/FooterPage";

const BlogMainPage = () => {
    return (
        <div className="pb-4">
            <Blog></Blog>

            <div className=" pt-14">
            <FooterPage></FooterPage>
            </div>

        </div>
    );
};

export default BlogMainPage;