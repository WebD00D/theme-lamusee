import sampleLandscapeOne from './images/sampleLandscape.jpg';
import sampleLandscapeTwo from './images/sampleLandscapeTwo.jpg';
import samplePortraitOne from './images/samplePortrait.jpg';
import samplePortraitTwo from './images/samplePortraitTwo.jpg';

const data = [
  {
    title: 'Mollit anim id est',
    photo: sampleLandscapeOne,
    meta: 'Jan. 2019',
    description:
      'Sed ut perspiciatis unde omniae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    title: 'Aute irure dolor in anim',
    photo: samplePortraitTwo,
    meta: 'Nov. 2018',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    title: 'Ut enim ad minim veniam dignissim sodales',
    photo: samplePortraitOne,
    meta: 'Nov. 2018',
    description:
      'Sed ut perspiciatis unde omnis vitae dicta sunt explicabo.'
  },
  {
    title: 'Duis aute irure dolor',
    photo: sampleLandscapeOne,
    meta: 'Oct. 2018',
    description:
      'Sed ut perspiciatis unde accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    title: 'Excepteur sint occaecat',
    photo: sampleLandscapeTwo,
    meta: 'Oct. 2018',
    description:
      'Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    title: 'Deserunt mollit anim id est laborum',
    photo: samplePortraitOne,
    meta: 'Oct. 2018',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    title: 'tempor incididunt ut labore',
    photo: sampleLandscapeOne,
    meta: 'Oct. 2018',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    title: 'Duis aute irure dolor in reprehenderit in voluptate velit',
    photo: samplePortraitOne,
    meta: 'Oct. 2018',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    title: 'eiusmod tempor incididunt',
    photo: sampleLandscapeTwo,
    meta: 'Oct. 2018',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    title: 'Nunc sed velit dignissim sodales ut',
    photo: samplePortraitTwo,
    meta: 'Oct. 2018',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    title: 'Id aliquet lectus proin nibh',
    photo: sampleLandscapeOne,
    meta: 'Oct. 2018',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    title: 'Nec ultrices dui sapien',
    photo: sampleLandscapeTwo,
    meta: 'Oct. 2018',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    title: 'eiusmod tempor incididunt',
    photo: sampleLandscapeTwo,
    meta: 'Oct. 2018',
    description:
      'Sed ut perspiciatis unde re veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    title: 'Nunc sed velit dignissim sodales ut',
    photo: samplePortraitTwo,
    meta: 'Oct. 2018',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    title: 'Id aliquet lectus proin nibh',
    photo: sampleLandscapeOne,
    meta: 'Oct. 2018',
    description:
      'Sed ut perspiciatis unde omnis ist eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    title: 'Nec ultrices dui sapien',
    photo: sampleLandscapeTwo,
    meta: 'Oct. 2018',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    title: 'eiusmod tempor incididunt',
    photo: sampleLandscapeTwo,
    meta: 'Oct. 2018',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    title: 'Nunc sed velit dignissim sodales ut',
    photo: samplePortraitTwo,
    meta: 'Oct. 2018',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit vo illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    title: 'Id aliquet lectus proin nibh',
    photo: sampleLandscapeOne,
    meta: 'Oct. 2018',
    description:
      'Sed ut perspiciatis unde omnis iste natus error laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    title: 'Nec ultrices dui sapien',
    photo: sampleLandscapeTwo,
    meta: 'Oct. 2018',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    title: 'eiusmod tempor incididunt',
    photo: sampleLandscapeTwo,
    meta: 'Oct. 2018',
    description:
      'Sed ut perspiciatis unde omnis ia quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    title: 'Nunc sed velit dignissim sodales ut',
    photo: samplePortraitTwo,
    meta: 'Oct. 2018',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    title: 'Id aliquet lectus proin nibh',
    photo: sampleLandscapeOne,
    meta: 'Oct. 2018',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    title: 'Nec ultrices dui sapien',
    photo: sampleLandscapeTwo,
    meta: 'Oct. 2018',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  }
];

export default data;
