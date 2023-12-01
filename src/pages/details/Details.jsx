import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, laoding } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, laoding: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={creditsLoading} />
    </div>
  )
};

export default Details;
