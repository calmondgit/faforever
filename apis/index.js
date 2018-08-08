import request from './request';
const host = 'http://magict.cn:5000/webapi';

// 获取列表
export const getEntry = () => {
  return request(`${host}/entry.cgi`, {
    method: 'POST',
    data: 'api=SYNO.AudioStation.Pin&method=list&version=1&library=all&limit=5000&offset=0',
  });
};

// 获取列表
export const getSongs = (album, album_artist) => {
  return request(`${host}/AudioStation/song.cgi`, {
    method: 'POST',
    data: `api=SYNO.AudioStation.Song&method=list&version=3&library=all&additional=song_tag%2Csong_audio%2Csong_rating&album=${encodeURIComponent(album)}&offset=0&album_artist=${encodeURIComponent(album_artist)}&limit=50000`,
  });
};


// 下载
export const download = (id) => {
  return `${host}/AudioStation/stream.cgi?api=SYNO.AudioStation.Stream&method=stream&version=1&id=${id}&seek_position=0`;
};