import React from 'react'
import nxt from '../Pic/nxt.png'
import pre from '../Pic/pre.png'

const PopularShows = () => {
  let content = [
    {
      id: '1',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5",
      title: "Mukundan Unni",
      des: "Fired from a law firm for unethical conduct, Adv Mukundan Unni leaves no stone unturned to achieve s ..."
    },
    {
      id: '2',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4253/1364253-v-17a2ff74143c",
      title: "Taaza Khabar",
      des: "A public toilet caretaker's poverty-stricken life takes a drastic U-turn when he helps an old woman. ..."
    },
    {
      id: '3',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5421/1445421-v-06772ee1734c",
      title: "Aar Ya Paar",
      des: "When the modern world's greed destroys his idyllic tribal existence, a valiant archer becomes a dead ..."
    },
    {
      id: '4',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4267/1364267-v-59ed5cfdea3a",
      title: "Jaya Jaya Jaya Jaya Hey",
      des: "Being brought up in a conservative family, Jaya feels even more trapped when she marries Rajesh, a m ..."
    },
    {
      id: '5',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4255/1364255-v-7d13c9d136b5",
      title: "Govinda Naam Mera",
      des: "Wedged between a court case, a bad marriage and his girlfriend, Govinda Waghmare gets further entang ..."
    },
    {
      id: '6',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1970/1441970-v-574d1988c10a",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '7',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5362/1395362-v-f8d73be7dd01",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '8',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7721/847721-v",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '9',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8056/1308056-v-b52e223ef46d",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '10',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3854/1423854-v-a109668f45a7",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '11',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5573/1435573-v-53ed03591520",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '12',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6594/1446594-v-8ccc26ba3e66",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },


  ]

  function Next() {
    let box = document.querySelector("#Popular_Shows")
    let width = box.clientWidth
    box.scrollLeft = box.scrollLeft + width;
  }
  function Pre() {
    let box = document.querySelector("#Popular_Shows")
    let width = box.clientWidth
    box.scrollLeft = box.scrollLeft - width;
  }

  return (
    <div>
      <h1 className="title">Popular Shows</h1>
      <div className="movies-list">
        <button className="pre-btn" onClick={Pre}><img src={pre} alt="" /></button>
        <button className="nxt-btn" onClick={Next}><img src={nxt} alt="" /></button>
        <div className="card-container" id='Popular_Shows'>
          {
            content.map((data) => {
              return (
                <div className="card">
                  <img src={data.img} className="card-img" alt="" />
                  <div className="card-body">
                    <h2 className="name">{data.title}</h2>
                    <h6 className="des">{data.des}</h6>
                    <button className="watchlist-btn">add to watchlist</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default PopularShows 