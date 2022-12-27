import moment from "moment";
import Image from "next/image";
export default function Artical({ article }) {
  const baseUrl =
    "https://crictracker-admin-panel.s3.ap-south-1.amazonaws.com/";
  return (
    <div className="w-full">
      <div>
        {article.map((e) => {
          return (
            <div key={e.sName}>
              <div className="flex flex-col  mx-auto justify-center ">
                {e.aArticle.map((artical, key) => {
                  const imgURL = artical?.oImg?.sUrl;
                  console.log(artical, "articlalll", imgURL);
                  if (artical.sType === "nBig") {
                    return (
                      <div
                        className="bg-white rounded-lg p-2 "
                        key={key + artical.sTitle}
                      >
                        <Image
                          src={
                            imgURL.includes("https://www.crictracker.com/")
                              ? imgURL
                              : `https://crictracker-admin-panel.s3.ap-south-1.amazonaws.com/${imgURL}`
                          }
                          alt="img"
                          width={266}
                          height={162}
                          layout="responsive"
                          objectFit="cover"
                        />
                        {/* <Image
                          className="rounded-lg img-fluid "
                          height={400}
                          width={600}
                          src={
                            imgURL.includes("https://www.crictracker.com/")
                              ? imgURL
                              : `https://crictracker-admin-panel.s3.ap-south-1.amazonaws.com/${imgURL}`
                          }
                        ></Image> */}
                        <h1 className="py-3 font-bold text-lg capitalize">
                          {artical.sTitle}
                        </h1>
                        <div className="text-gray-500   text-[12px]">
                          <span>
                            {moment(artical.dPublishDate).format("DD MMM YYYY")}
                          </span>
                        </div>
                      </div>
                    );
                  }
                  if (artical.sType === "nSmall") {
                    return (
                      <div
                        className="bg-white w-full rounded-lg p-3 shadow-primary-700  flex flex-row gap-2 mt-3"
                        key={key + artical.sTitle}
                      >
                        {console.log(imgURL, "urlllll")}
                        <Image
                          className="rounded-lg "
                          height={120}
                          width={160}
                          src={`https://crictracker-admin-panel-local-dev-08032022.s3.ap-south-1.amazonaws.com/${imgURL}`}
                          // src={"https://picsum.photos/200/100?random=" + key}
                        ></Image>
                        <div className="flex flex-col justify-between">
                          <h1 className="py-3 font-bold text-sm capitalize">
                            {artical.sTitle}
                          </h1>
                          <div className="text-gray-500 font-semibold text-[12px]">
                            <span>
                              {moment(artical.dPublishDate).format(
                                "DD MMM YYYY"
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
