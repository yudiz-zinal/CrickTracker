import moment from "moment";
import Image from "next/image";
export default function Artical({ article }) {
  return (
    <div className="w-full">
      <div>
        {article.map((e) => {
          return (
            <div key={e.sName}>
              <div className="flex flex-col  mx-auto justify-center ">
                {e.aArticle.map((artical, key) => {
                  if (artical.sType === "nBig") {
                    return (
                      <div
                        className="bg-white rounded-lg p-2 "
                        key={key + artical.sTitle}
                      >
                        <Image
                          className="rounded-lg img-fluid "
                          height={400}
                          width={600}
                          src={"https://picsum.photos/600/400?random=" + key}
                        ></Image>
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
                        <Image
                          className="rounded-lg "
                          height={120}
                          width={160}
                          src={"https://picsum.photos/200/100?random=" + key}
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
