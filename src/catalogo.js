const catalogo = [
    {
      imagen: 'IMG-20230424-WA0031',
      categoria: 'pestañas y cejas',
      nombreProducto: 'pestañas pxp mix nagaraku',
      stock: 10,
      precio: 2140
    },
    {
      imagen: 'broches',
      categoria: 'manicura y pedicura',
      nombreProducto: 'broche acrilico para capsulas',
      stock: 15,
      precio: 130
    },
    {
      imagen: '20230318_103332',
      categoria: 'maquillaje',
      nombreProducto: 'brocha de maquilleje x 5',
      stock: 10,
      oferta: 1,
      precio: 1000
    },
    {
      imagen: '20230321_190416',
      categoria: 'organizadores',
      nombreProducto: 'porta pincel de acrilico',
      stock: 2,
      precio: 1330
    },
    {
      imagen: '20230425_105827',
      categoria: 'electronico',
      nombreProducto: 'secador de pestñas  ventilador para pestañas',
      stock: 3,
      precio: 3800
    },
    {
      imagen: '20230429_100914',
      categoria: 'cuidado personal',
      nombreProducto: 'mascarilla de colageno para ojeras',
      stock: 5,
      oferta: 1,
      precio: 160
    },
    {
      imagen: 'serpientestrass',
      categoria: 'manicura y pedicura',
      nombreProducto: 'aplique de serpiente decoracion  para uña',
      stock: 10,
      precio: 230
    },
    {
      imagen: '20230103_162815',
      categoria: 'electronico',
      nombreProducto: 'mini cambina boom 6w',
      stock: 4,
      precio: 1860
    },
    {
      imagen: '20230425_105924',
      categoria: 'pestañas y cejas',
      nombreProducto: 'cepillo p/ pestañas 10 u.',
      stock: 20,
      precio: 170
    },
    {
      imagen: '20230422_105036',
      categoria: 'organizadores',
      nombreProducto: 'apoya manos  de madera',
      stock: 10,
      precio: 2500
    },
    {
      imagen: '20230430_173552',
      categoria: 'manicura y pedicura',
      nombreProducto: 'tips city girls  240 u flexibles',
      stock: 5,
      precio: 1820
    },
    {
      imagen: '20230424_161903',
      categoria: 'electronico',
      nombreProducto: 'lampara de escritorio luz blanca',
      stock: 2,
      precio: 3850
    },
    {
      imagen: '20230425_121210',
      categoria: 'pestañas y cejas',
      nombreProducto: 'pestañas tipo ramito x 36 u',
      stock: 4,
      precio: 600
    },
    {
      imagen: 'vkn-77661-824c7c03bc6db6c01516794923718692-640-0',
      categoria: 'organizadores',
      nombreProducto: 'album p/sticker entran 80 u',
      stock: 3,
      precio: 1400
    },
    {
      imagen: '20230321_190530',
      categoria: 'organizadores',
      nombreProducto: 'bandeja esterilizadora color rosa',
      stock: 1,
      oferta: 1,
      precio: 2710
    },
    {
      imagen: '20230203_182359',
      categoria: 'manicura y pedicura',
      nombreProducto: 'esmates charm reflectivos',
      stock: 15,
      precio: 800
    },
    {
      imagen: '20230424_161651',
      categoria: 'pestañas y cejas',
      nombreProducto: 'cinta p/ pestaña hipoaleargenica',
      stock: 5,
      precio: 320
    },
    {
      imagen: '20230417_094915',
      categoria: 'electronico',
      nombreProducto: 'aro luz  led',
      stock: 2,
      precio: 700
    },
    {
      imagen: '20230424_154231',
      categoria: 'manicura y pedicura',
      nombreProducto: 'brocha/polvo color surtido',
      stock: 10,
      precio: 550
    },
    {
      imagen: '20230425_105957',
      categoria: 'pestañas y cejas',
      nombreProducto: 'shampo/pestañas lash original',
      stock: 3,
      precio: 910
    },
    {
      imagen: '20230504_103507',
      categoria: 'manicura y pedicura',
      nombreProducto: 'corta cuticula  eloise metal',
      stock: 5,
      oferta: 1,
      precio: 970
    },
    {
      imagen: '20230403_181017',
      categoria: 'pestañas y cejas',
      nombreProducto: 'micro-hisopos  x 50 u surtido',
      stock: 5,
      precio: 730
    },
    {
      imagen: '20230320_191707',
      categoria: 'electronico',
      nombreProducto: 'linterna chica  uv color surtido',
      stock: 5,
      precio: 1270
    },
    {
      imagen: '20230320_192214',
      categoria: 'pestañas y cejas',
      nombreProducto: 'pestaña magnetica medidas surtidas',
      stock: 5,
      precio: 1910
    },
    {
      imagen: '20230320_185642',
      categoria: 'electronico',
      nombreProducto: 'cabina-eloise 48w color surtido',
      stock: 2,
      precio: 6500
    },
    {
      imagen: '20230424_175101',
      categoria: 'manicura y pedicura',
      nombreProducto: 'polygel navi  30 ml',
      stock: 10,
      precio: 2300
    },
    {
      imagen: 'IMG_20230404_195552_746',
      categoria: 'manicura y pedicura',
      nombreProducto: 'mini palitos con punta de algodón',
      stock: 10,
      precio: 360
    },
    {
      imagen: 'IMG_20230404_195552_928',
      categoria: 'pestañas y cejas',
      nombreProducto: 'pinza lisa para pestañas',
      stock: 4,
      precio: 500
    },
    {
      imagen: '20230429_101015',
      categoria: 'maquillaje',
      nombreProducto: 'paleta de sombra x 9 colores',
      stock: 2,
      precio: 1450
    },
    {
      imagen: '20230429_100954',
      categoria: 'maquillaje',
      nombreProducto: 'base  fit me 24h',
      stock: 2,
      precio: 700
    },
    {
      imagen: '20230429_101055',
      categoria: 'maquillaje',
      nombreProducto: 'paleta de sombra pink 21 x6',
      stock: 1,
      precio: 970
    },
    {
      imagen: '20230429_100828',
      categoria: 'cuidado personal',
      nombreProducto: 'mascarilla puntos p/ negros',
      stock: 10,
      precio: 100
    },
    {
      imagen: '20230429_100815',
      categoria: 'cuidado personal',
      nombreProducto: 'mascarilla para rostro natural',
      stock: 10,
      precio: 360
    },
    {
      imagen: '20230426_182328',
      categoria: 'manicura y pedicura',
      nombreProducto: 'apliques cola de sirena surtido x 1',
      stock: 20,
      precio: 130
    },
    {
      imagen: 'c1b7695bae86e0e89ecf5b17caffec7a',
      categoria: 'manicura y pedicura',
      nombreProducto: 'pincel esponja  surtido x 1',
      stock: 5,
      precio: 910
    },
    {
      imagen: '20230428_101849',
      categoria: 'manicura y pedicura',
      nombreProducto: 'tips para pies  x500u',
      stock: 5,
      precio: 1850
    },
    {
      imagen: '20230426_180348',
      categoria: 'manicura y pedicura',
      nombreProducto: 'plancha de tips city x24',
      stock: 20,
      precio: 290
    },
    {
      imagen: '20230426_144107',
      categoria: 'manicura y pedicura',
      nombreProducto: 'esmalte semi navi cover pink',
      stock: 6,
      precio: 1450
    },
    {
      imagen: '20230425_121310',
      categoria: 'pestañas y cejas',
      nombreProducto: 'pestañas pxp nagaraku color',
      stock: 3,
      precio: 1830
    },
    {
      imagen: '20230424_160301',
      categoria: 'manicura y pedicura',
      nombreProducto: 'polvo efecto power multicolor paris',
      stock: 3,
      precio: 770
    },
    {
      imagen: '20230424_160048',
      categoria: 'manicura y pedicura',
      nombreProducto: 'top o base navi 15 ml',
      stock: 4,
      precio: 1850
    },
    {
      imagen: '20230424_160327.',
      categoria: 'manicura y pedicura',
      nombreProducto: 'strass multicoles carrusel',
      stock: 3,
      precio: 330
    },
    {
      imagen: '20230424_153715',
      categoria: 'manicura y pedicura',
      nombreProducto: 'strass plateado 1440 pc surtido',
      stock: 10,
      precio: 680
    },
    {
      imagen: '20230503_182935',
      categoria: 'organizadores',
      nombreProducto: 'canasto  color nude',
      stock: 10,
      precio: 360
    },
    {
      imagen: '20230503_182956',
      categoria: 'organizadores',
      nombreProducto: 'canasto  rosa grande',
      stock: 5,
      precio: 450
    },
    {
      imagen: 'IMG_20230503_203049_999',
      categoria: 'manicura y pedicura',
      nombreProducto: 'top o base cherimoya 15 ml',
      stock: 10,
      precio: 1850
    },
    {
      imagen: '20230503_180914',
      categoria: 'manicura y pedicura',
      nombreProducto: 'ultrabon, primer o ph cherimoya consultar',
      stock: 10,
      precio: 1850
    },
    {
      imagen: '20230503_181315',
      categoria: 'manicura y pedicura',
      nombreProducto: 'charm limit aprobado base coat',
      stock: 15,
      precio: 1000
    },
    {
      imagen: '20230503_181315',
      categoria: 'manicura y pedicura',
      nombreProducto: 'charm limit aprobado top cristal',
      stock: 15,
      precio: 1000
    },
    {
      imagen: '20230503_181315',
      categoria: 'manicura y pedicura',
      nombreProducto: 'charm limit aprobado top coat',
      stock: 15,
      precio: 1000
    },
    {
      imagen: '20230503_142430',
      categoria: 'manicura y pedicura',
      nombreProducto: 'esmalte semi charm9 ml consultar',
      stock: 20,
      precio: 430
    },
    {
      imagen: '20230503_130240',
      categoria: 'manicura y pedicura',
      nombreProducto: 'esmalte semi charm10 ml',
      stock: 40,
      precio: 500
    },
    {
      imagen: '20230503_125108',
      categoria: 'manicura y pedicura',
      nombreProducto: 'picel liner  x3',
      stock: 5,
      precio: 470
    },
    {
      imagen: '20230502_135552',
      categoria: 'manicura y pedicura',
      nombreProducto: 'sanitizante lfme120 ml',
      stock: 10,
      precio: 580
    },
    {
      imagen: '20230502_134925',
      categoria: 'pestañas y cejas',
      nombreProducto: 'pegamento nagaraku clear',
      stock: 4,
      precio: 3330
    },
    {
      imagen: '20230502_131529',
      categoria: 'manicura y pedicura',
      nombreProducto: 'pincel lengua de gato  n8',
      stock: 10,
      precio: 390
    },
    {
      imagen: '20230502_131419',
      categoria: 'manicura y pedicura',
      nombreProducto: 'pincel para gel n 8',
      stock: 7,
      precio: 360
    },
    {
      imagen: '20230502_131354',
      categoria: 'manicura y pedicura',
      nombreProducto: 'pincel para esculpida n 8',
      stock: 10,
      precio: 360
    },
    {
      imagen: '20230424_155132',
      categoria: 'manicura y pedicura',
      nombreProducto: 'aceite cherimoya premiun',
      stock: 5,
      precio: 580
    },
    {
      imagen: '20230424_154859',
      categoria: 'manicura y pedicura',
      nombreProducto: 'primer las varanos con o sin acido',
      stock: 10,
      precio: 540
    },
    {
      imagen: '20230424_155206.',
      categoria: 'manicura y pedicura',
      nombreProducto: 'polimero qbd 30 gr',
      stock: 10,
      precio: 660
    },
    {
      imagen: '20230414_094753',
      categoria: 'manicura y pedicura',
      nombreProducto: 'compresas x 10color surtido',
      stock: 10,
      precio: 830
    },
    {
      imagen: '20230414_101844',
      categoria: 'manicura y pedicura',
      nombreProducto: 'pinturas tei 10 ml consultar color',
      stock: 25,
      precio: 450
    },
    {
      imagen: '20230424_155254',
      categoria: 'manicura y pedicura',
      nombreProducto: 'cintas decovarios colores',
      stock: 10,
      precio: 70
    },
    {
      imagen: '20230424_155340',
      categoria: 'manicura y pedicura',
      nombreProducto: 'perfec liner universal',
      stock: 4,
      precio: 320
    },
    {
      imagen: '20230424_155358',
      categoria: 'manicura y pedicura',
      nombreProducto: 'pega foil las varanos',
      stock: 4,
      precio: 440
    },
    {
      imagen: '20230424_155905',
      categoria: 'manicura y pedicura',
      nombreProducto: 'fesa pulidora',
      stock: 9,
      precio: 400
    },
    {
      imagen: '20230504_103641',
      categoria: 'manicura y pedicura',
      nombreProducto: 'tijera curvaeloise metal',
      stock: 10,
      precio: 480
    },
    {
      imagen: '20230504_134729',
      categoria: 'manicura y pedicura',
      nombreProducto: 'cabina con soporte 48 w',
      stock: 2,
      precio: 7940
    },
    {
      imagen: '20230424_153615',
      categoria: 'manicura y pedicura',
      nombreProducto: 'set liner x 3brillo',
      stock: 10,
      precio: 770
    },
    {
      imagen: '20230414_135631',
      categoria: 'pestañas y cejas',
      nombreProducto: 'pegamento nagaraku blanco o negro',
      stock: 6,
      precio: 3000
    },
    {
      imagen: '20230414_121654',
      categoria: 'manicura y pedicura',
      nombreProducto: 'barbijos x 10 consultar color',
      stock: 10,
      precio: 200
    }
  ]