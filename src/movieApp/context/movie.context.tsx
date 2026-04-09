import { createContext, useContext, useState, useEffect } from "react";

export type Movie = {
    id : string;
    title : string;     // 영화 제목
    description : string; // 영화 개요
    image : string;     // 영화 포스터
    director : string;  // 영화 감독
    release_date : string;
};