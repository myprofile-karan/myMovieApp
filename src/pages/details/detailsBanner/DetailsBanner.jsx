import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/Img.jsx";
import PosterFallback from "../../../assets/no-poster.png";
import { PlayIcon } from "./PlayIcon";
import VideoPopup from "../../../components/videoPopup/VideoPopup";

const DetailsBanner = ({ video, crew }) => {

    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  const { url } = useSelector((state) => state.home);

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  const director = crew?.filter((obj)=> obj.job === "Director");
  
  const writer = crew?.filter((obj)=> obj.job === "Screenplay");
  
  return (
    <div className="detailsBanner">
      {!loading ? (
        <>
          {!!data && (
            <>
              <div className="backdrop-img">
                <Img src={url.backdrop + data.backdrop_path} />
              </div>
              <div className="opacity-layer"></div>
              <ContentWrapper>
                <div className="content">
                  <div className="left">
                    <Img
                      src={
                        data.poster_path
                          ? url.backdrop + data.poster_path
                          : PosterFallback
                      }
                      className="posterImg"
                    />
                  </div>
                  <div className="right">
                    <div className="title">
                      {`${data?.title || data?.name} (${dayjs(
                        data?.release_date
                      ).format("YYYY")})
                    `}
                    </div>
                    <div className="subtitle">{data?.tagline}</div>
                    <div className="rating">
                      <span style={{ color: "gold" }}>
                        <u>IMDB</u>{" "}
                      </span>
                      {data?.vote_average}
                    </div>
                    <div className="row">
                      <div 
                      className="playbtn"
                    onClick={()=> {
                        setShow(true)
                        setVideoId(video.key)}
                    }
                      >
                        <PlayIcon />
                      </div>
                    </div>
                    <div className="overview">
                      <div className="heading">Overview</div>
                      <div className="description">{data.overview}</div>
                    </div>
                    <div className="info">
                      {data.status && (
                        <div className="infoItem">
                          <span className="text bold">Status: </span>
                          <span className="text">{data.status}</span>
                        </div>
                      )}
                      {data.release_date && (
                        <div className="infoItem">
                          <span className="text bold">Release Date: </span>
                          <span className="text">
                            {dayjs(data.release_date).format("MMM D, YYYY")}
                          </span>
                        </div>
                      )}
                      {data.runtime && (
                        <div className="infoItem">
                          <span className="text bold">Runtime: </span>
                          <span className="text">
                            {toHoursAndMinutes(data.runtime)}
                          </span>
                        </div>
                      )}
                    </div>

                    {director?.length > 0 && (
                        <div className="info">
                            <span className="text bold">
                                Director:
                            </span>
                            <div className="text">
                                {director.map((item,i)=>{
                                    return(
                                        <span key={i}>
                                            {item.name}
                                            {director.length - 1 !== i && ", "}
                                        </span>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                    {writer?.length > 0 && (
                        <div className="info">
                            <span className="text bold">
                                Writer:
                            </span>
                            <div className="text">
                                {writer?.map((item,i)=>{
                                    return(
                                        <span key={i}>
                                            {item.name}
                                            {writer.length - 1 !== i && ", "}
                                        </span>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                  </div>
                </div>
                <VideoPopup 
                    show={show}
                    setShow={setShow}
                    videoId={videoId}
                    setVideoId={setVideoId}
                />
              </ContentWrapper>
            </>
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
