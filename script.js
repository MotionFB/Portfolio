{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const gallery = document.getElementById('gallery');\
\
// Replace with your Vimeo user ID\
const vimeoUserId = 'your_vimeo_user_id';\
const vimeoApiUrl = `https://vimeo.com/api/v2/$\{vimeoUserId\}/videos.json`;\
\
fetch(vimeoApiUrl)\
  .then(response => response.json())\
  .then(videos => \{\
    videos.forEach(video => \{\
      const iframe = document.createElement('iframe');\
      iframe.src = `https://player.vimeo.com/video/$\{video.id\}`;\
      gallery.appendChild(iframe);\
    \});\
  \})\
  .catch(error => console.error('Error fetching Vimeo videos:', error));\
}