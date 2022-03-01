export default () => ({
  isLoading:true,
  entries:[
    {
      id:new Date().getTime(),
      date:new Date().toDateString(),
      text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eos nesciunt unde, mollitia consectetur quas nostrum laborum repellat ratione totam maxime sequi dolores iure at perferendis veritatis nihil labore voluptas!',
      picture:null,
    },
    {
      id:new Date().getTime() + 1000,
      date:new Date().toDateString(),
      text:'Ay la llevamos ya, y esta es una entrada bien monita',
      picture:null,
    },
    {
      id:new Date().getTime() + 2000,
      date:new Date().toDateString(),
      text:'Jijuesu, este texto es bien random',
      picture:null,
    }
  ]
});