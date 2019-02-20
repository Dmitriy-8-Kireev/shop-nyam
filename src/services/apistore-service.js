export default class ApistoreService {
  data = [
    {
      id: "1",
      access: true,
      title: "Сказочное заморское яство",
      name: "Нямушка",
      view: "с фуа-гра",
      portionnumb: "10",
      portion: " порций",
      presentnumb: "",
      present: "мышь в подарок",
      review: "",
      image:
        "https://user-images.githubusercontent.com/35657933/52784274-98820a00-3065-11e9-8eb2-ecc0e906dc7c.png",
      weight: "0,5",
      measure: "кг",
      description: "Печень утки разварная с артишоками.",
      question: "Чего сидишь? Порадуй котэ, ",
      button: "купи",
      disabledtext: "Печалька, с фуа-гра закончился.",
      check: false,
      revoke: "Котэ не одобряет?",
      checkHover: false
    },
    {
      id: "2",
      access: true,
      title: "Сказочное заморское яство",
      name: "Нямушка",
      view: "с рыбой",
      portionnumb: "40",
      portion: " порций",
      presentnumb: "2",
      present: " мыши в подарок",
      review: "",
      image:
        "https://user-images.githubusercontent.com/35657933/52784274-98820a00-3065-11e9-8eb2-ecc0e906dc7c.png",
      weight: "2",
      measure: "кг",
      description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
      question: "Чего сидишь? Порадуй котэ, ",
      button: "купи",
      disabledtext: "Печалька, с рыбой закончился.",
      check: false,
      revoke: "Котэ не одобряет?",
      checkHover: false
    },
    {
      id: "3",
      access: false,
      title: "Сказочное заморское яство",
      name: "Нямушка",
      view: "с курой",
      portionnumb: "40",
      portion: " порций",
      presentnumb: "5",
      present: " мышей в подарок",
      review: "заказчик доволен",
      image:
        "https://user-images.githubusercontent.com/35657933/52784274-98820a00-3065-11e9-8eb2-ecc0e906dc7c.png",
      weight: "5",
      measure: "кг",
      description: "Филе из цыплят с трюфелями в бульоне.",
      question: "Чего сидишь? Порадуй котэ, ",
      button: "купи",
      disabledtext: "Печалька, с курой закончился.",
      check: false,
      revoke: "Котэ не одобряет?",
      checkHover: false
    }
  ];

  getData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.data);
      }, 700);
    });
  }
}
