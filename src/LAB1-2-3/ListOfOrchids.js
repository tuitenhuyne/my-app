const ListOfOrchids = [
  {
    id: '1',
    name: 'Cattleya cernua',
    rating: 5,
    isSpecial: true,
    image:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Cattleya_cernua_(Lindl.)_Van_den_Berg,_Neodiversity_5_13_(2010)_(31091495627).jpg',
    color: 'Red',
    origin: 'Brazil to Northeast Argentina',
    category: 'Cattleya',
    source:
      'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:77114736-1'
  },

  {
    id: '2',
    name: 'Cattleya labiata',
    rating: 5,
    isSpecial: true,
    image:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Cattleya_labiata.jpg',
    color: 'Pink',
    origin: 'Brazil',
    category: 'Cattleya',
    source:
      'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:622132-1'
  },

  {
    id: '3',
    name: 'Cattleya intermedia',
    rating: 4,
    isSpecial: false,
    image:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Cattleya_intermedia.jpg',
    color: 'White',
    origin: 'Brazil to Paraguay',
    category: 'Cattleya',
    source:
      'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:322842-2'
  },

  {
    id: '4',
    name: 'Phalaenopsis aphrodite',
    rating: 5,
    isSpecial: true,
    image:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Phalaenopsis_aphrodite_%27-180501%27_Rchb.f.,_Hamburger_Garten-_Blumenzeitung_18_35_(1862)_(47706143821).jpg',
    color: 'White',
    origin: 'Philippines',
    category: 'Phalaenopsis',
    source:
      'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:650507-1'
  },

  {
    id: '5',
    name: 'Phalaenopsis bellina',
    rating: 5,
    isSpecial: true,
    image:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Phalaenopsis_bellina_(Rchb.f.)_Christenson,_Brittonia_47_58_(1995)_(48320280212).jpg',
    color: 'Pink and Green',
    origin: 'Borneo',
    category: 'Phalaenopsis',
    source:
      'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:982608-1'
  },

  {
    id: '6',
    name: 'Phalaenopsis violacea',
    rating: 5,
    isSpecial: true,
    image:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Phalaenopsis_violacea_(Sumatra)_H.Witte,_Ann._Hort._Bot._4-_129_(1861)_(35255375441).jpg',
    color: 'Purple',
    origin: 'Peninsular Malaysia to Sumatra',
    category: 'Phalaenopsis',
    source:
      'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:650604-1'
  },

  {
    id: '7',
    name: 'Phalaenopsis equestris',
    rating: 4,
    isSpecial: false,
    image:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Phalaenopsis_equestris_(Schauer)_Rchb.f.,_Linnaea_22-_864_(1850)_(24800985397).jpg',
    color: 'Pink',
    origin: 'Taiwan to Philippines',
    category: 'Phalaenopsis',
    source:
      'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:650531-1'
  },

  {
    id: '8',
    name: 'Phalaenopsis amboinensis',
    rating: 4,
    isSpecial: false,
    image:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Phalaenopsis_amboinensis_Orchi_169.jpg',
    color: 'Yellow',
    origin: 'Sulawesi to Maluku',
    category: 'Phalaenopsis',
    source:
      'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:650503-1'
  },

  {
    id: '9',
    name: 'Dendrobium anosmum',
    rating: 5,
    isSpecial: true,
    image:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Dendrobium_anosmum_2zz.jpg',
    color: 'Purple and White',
    origin: 'Sri Lanka to New Guinea',
    category: 'Dendrobium',
    source:
      'https://powo.science.kew.org/taxon/626808-1'
  },

  {
    id: '10',
    name: 'Dendrobium nobile',
    rating: 5,
    isSpecial: true,
    image:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Dendrobium_nobile_1.jpg',
    color: 'White and Purple',
    origin: 'Nepal to South China and Indo-China',
    category: 'Dendrobium',
    source:
      'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:628105-1'
  },

  {
    id: '11',
    name: 'Dendrobium bigibbum',
    rating: 4,
    isSpecial: false,
    image:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Orchidee_---_Dendrobium_Bigibbum_(7759687878).jpg',
    color: 'Purple',
    origin: 'New Guinea to Queensland',
    category: 'Dendrobium',
    source:
      'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:626928-1'
  },

  {
    id: '12',
    name: 'Dendrobium chrysotoxum',
    rating: 5,
    isSpecial: true,
    image:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Dendrobium_chrysotoxum_Lindl.-_Edwards%27s_Bot._Reg._33-_t._19_(1847)._20220427_094255.jpg',
    color: 'Yellow',
    origin: 'Himalaya to Indo-China',
    category: 'Dendrobium',
    source:
      'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:627099-1'
  },

  {
    id: '13',
    name: 'Vanda coerulea',
    rating: 5,
    isSpecial: true,
    image:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Vanda_coerulea_(2943608475).jpg',
    color: 'Blue',
    origin: 'Arunachal Pradesh to China and Indo-China',
    category: 'Vanda',
    source:
      'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:660987-1'
  },

  {
    id: '14',
    name: 'Vanda tricolor',
    rating: 4,
    isSpecial: false,
    image:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Vanda_tricolor.jpg',
    color: 'Yellow and Purple',
    origin: 'Western Java',
    category: 'Vanda',
    source:
      'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:661089-1'
  },

  {
    id: '15',
    name: 'Vanda cristata',
    rating: 4,
    isSpecial: false,
    image:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Vanda_cristata.jpg',
    color: 'Green and Yellow',
    origin: 'Himalaya to Indo-China',
    category: 'Vanda',
    source:
      'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:660994-1'
  },

  {
    id: '16',
    name: 'Vanda dearei',
    rating: 5,
    isSpecial: true,
    image:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Vanda_dearei_Singapore_Botanic_Gardens-_(9252396107)_-_cropped.jpg',
    color: 'Yellow',
    origin: 'Borneo',
    category: 'Vanda',
    source:
      'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:660997-1'
  }
];

export default ListOfOrchids;