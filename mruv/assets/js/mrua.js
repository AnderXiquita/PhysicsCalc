const _0x4d6576 = _0x3cff;
(function(_0x3a921d, _0x4eac09) {
    const _0x5edd04 = _0x3cff
      , _0x315f1f = _0x3a921d();
    while (!![]) {
        try {
            const _0x285d2b = parseInt(_0x5edd04(0xf1)) / 0x1 + -parseInt(_0x5edd04(0xd8)) / 0x2 * (-parseInt(_0x5edd04(0x136)) / 0x3) + -parseInt(_0x5edd04(0xe0)) / 0x4 + -parseInt(_0x5edd04(0xbe)) / 0x5 * (-parseInt(_0x5edd04(0xfb)) / 0x6) + parseInt(_0x5edd04(0xf4)) / 0x7 + -parseInt(_0x5edd04(0xe7)) / 0x8 * (-parseInt(_0x5edd04(0x105)) / 0x9) + parseInt(_0x5edd04(0xb9)) / 0xa * (-parseInt(_0x5edd04(0x138)) / 0xb);
            if (_0x285d2b === _0x4eac09)
                break;
            else
                _0x315f1f['push'](_0x315f1f['shift']());
        } catch (_0x62f729) {
            _0x315f1f['push'](_0x315f1f['shift']());
        }
    }
}(_0x2c87, 0x5b688));
function captura() {
    const _0x141735 = _0x3cff;
    var _0x3c2e3a = document[_0x141735(0xe6)](_0x141735(0xb6))[_0x141735(0x12f)]
      , _0x8308d6 = document[_0x141735(0xe6)]('vi')[_0x141735(0x12f)]
      , _0x2e71a4 = document['getElementById']('vf')['value']
      , _0x59f014 = document[_0x141735(0xe6)]('tiempo')['value']
      , _0x532397 = document[_0x141735(0xe6)]('aceleracion')[_0x141735(0x12f)]
      , _0x63835d = document[_0x141735(0xe6)]('unidadx')[_0x141735(0x12f)]
      , _0x2fa366 = document[_0x141735(0xe6)](_0x141735(0xec))[_0x141735(0x12f)]
      , _0x4c4558 = document['getElementById'](_0x141735(0xfc))['value']
      , _0x452716 = document[_0x141735(0xe6)]('unidadt')[_0x141735(0x12f)];
    if (_0x3c2e3a == '')
        document[_0x141735(0xe6)](_0x141735(0xb5))[_0x141735(0xe5)] = '',
        document[_0x141735(0xe6)](_0x141735(0xa0))[_0x141735(0xe5)] = '',
        document[_0x141735(0xe6)](_0x141735(0xca))[_0x141735(0xe5)] = '',
        document['getElementById'](_0x141735(0xea))[_0x141735(0xbc)][_0x141735(0xb7)] = _0x141735(0xf2);
    else {
        if (_0x63835d == 'cm')
            temporal = _0x3c2e3a,
            _0x3c2e3a = _0x3c2e3a / 0x64,
            document[_0x141735(0xe6)](_0x141735(0xb5))['innerHTML'] = '/100\x20=\x20' + _0x3c2e3a + '\x20metros',
            document[_0x141735(0xe6)](_0x141735(0xa0))['innerHTML'] = _0x141735(0x109),
            document[_0x141735(0xe6)](_0x141735(0xca))['innerHTML'] = formato(temporal) + _0x141735(0x12b) + _0x3c2e3a + _0x141735(0xc5),
            document[_0x141735(0xe6)](_0x141735(0xea))['style']['display'] = 'block';
        else
            _0x63835d == 'km' ? (temporal = _0x3c2e3a,
            _0x3c2e3a = _0x3c2e3a * 0x3e8,
            document[_0x141735(0xe6)](_0x141735(0xb5))[_0x141735(0xe5)] = _0x141735(0xc6) + _0x3c2e3a + _0x141735(0xd7),
            document['getElementById'](_0x141735(0xa0))['innerHTML'] = 'Conversión\x20de\x20distancia\x20:\x20km\x20a\x20metros',
            document['getElementById'](_0x141735(0xca))['innerHTML'] = formato(temporal) + '<sub\x20class=\x27p-formulas\x27>km</sub>\x20*\x201000\x20=\x20' + _0x3c2e3a + '<sub\x20class=\x27p-formulas\x27>\x20metros</sub>',
            document[_0x141735(0xe6)]('divdistancia')[_0x141735(0xbc)][_0x141735(0xb7)] = _0x141735(0x122)) : (_0x3c2e3a = _0x3c2e3a,
            document['getElementById']('conversiond')[_0x141735(0xe5)] = '',
            document['getElementById'](_0x141735(0xea))['style'][_0x141735(0xb7)] = _0x141735(0xf2));
    }
    _0x8308d6 == '' ? (document[_0x141735(0xe6)]('conversionvi')['innerHTML'] = '',
    document[_0x141735(0xe6)](_0x141735(0x113))[_0x141735(0xe5)] = '',
    document['getElementById']('conversionvi2')['innerHTML'] = '',
    document['getElementById']('divvi')['style']['display'] = _0x141735(0xf2)) : _0x2fa366 == 'km/h' && _0x8308d6 != '' && _0x8308d6 != '0' ? (temporal = _0x8308d6,
    _0x8308d6 = _0x8308d6 / 3.6,
    document[_0x141735(0xe6)]('conversionvi')['innerHTML'] = _0x141735(0xac) + _0x8308d6 + _0x141735(0xa9),
    document[_0x141735(0xe6)](_0x141735(0x113))['innerHTML'] = _0x141735(0x103),
    document[_0x141735(0xe6)](_0x141735(0x128))[_0x141735(0xe5)] = formato(temporal) + _0x141735(0xc9) + _0x8308d6 + _0x141735(0xa8),
    document[_0x141735(0xe6)](_0x141735(0xe3))[_0x141735(0xbc)][_0x141735(0xb7)] = _0x141735(0x122)) : (_0x8308d6 = _0x8308d6,
    document[_0x141735(0xe6)](_0x141735(0x98))[_0x141735(0xe5)] = '',
    document[_0x141735(0xe6)](_0x141735(0xe3))[_0x141735(0xbc)][_0x141735(0xb7)] = _0x141735(0xf2));
    _0x2e71a4 == '' ? (document[_0x141735(0xe6)]('conversionvf')[_0x141735(0xe5)] = '',
    document['getElementById'](_0x141735(0x134))[_0x141735(0xe5)] = '',
    document[_0x141735(0xe6)](_0x141735(0xcb))[_0x141735(0xe5)] = '',
    document[_0x141735(0xe6)](_0x141735(0xa5))[_0x141735(0xbc)][_0x141735(0xb7)] = _0x141735(0xf2)) : _0x4c4558 == _0x141735(0xa2) ? (temporal = _0x2e71a4,
    _0x2e71a4 = _0x2e71a4 / 3.6,
    document['getElementById'](_0x141735(0x12a))[_0x141735(0xe5)] = '/3,6\x20=\x20' + _0x2e71a4 + _0x141735(0xa9),
    document['getElementById'](_0x141735(0x134))[_0x141735(0xe5)] = _0x141735(0xb2),
    document[_0x141735(0xe6)](_0x141735(0xcb))[_0x141735(0xe5)] = formato(temporal) + _0x141735(0xc9) + _0x2e71a4['toFixed'](0x2) + _0x141735(0xa8),
    document[_0x141735(0xe6)](_0x141735(0xa5))[_0x141735(0xbc)]['display'] = _0x141735(0x122)) : (_0x2e71a4 = _0x2e71a4,
    document[_0x141735(0xe6)](_0x141735(0x12a))[_0x141735(0xe5)] = '',
    document[_0x141735(0xe6)](_0x141735(0xa5))[_0x141735(0xbc)]['display'] = 'none');
    if (_0x59f014 == '')
        document[_0x141735(0xe6)](_0x141735(0xef))[_0x141735(0xe5)] = '',
        document['getElementById']('conversiont1')[_0x141735(0xe5)] = '',
        document['getElementById'](_0x141735(0x9d))[_0x141735(0xe5)] = '',
        document[_0x141735(0xe6)]('divtiempo')['style']['display'] = 'none';
    else {
        if (_0x452716 == _0x141735(0xb0))
            temporal = _0x59f014,
            _0x59f014 = _0x59f014 * 0x3c,
            document[_0x141735(0xe6)](_0x141735(0xef))[_0x141735(0xe5)] = _0x141735(0xf8) + _0x59f014 + _0x141735(0x95),
            document[_0x141735(0xe6)](_0x141735(0xdb))['innerHTML'] = _0x141735(0xcc),
            document['getElementById'](_0x141735(0x9d))[_0x141735(0xe5)] = formato(temporal) + _0x141735(0x10b) + _0x59f014 + _0x141735(0xc3),
            document['getElementById'](_0x141735(0xe2))[_0x141735(0xbc)][_0x141735(0xb7)] = _0x141735(0x122);
        else
            _0x452716 == _0x141735(0xa4) ? (temporal = _0x59f014,
            _0x59f014 = _0x59f014 * 0xe10,
            document[_0x141735(0xe6)](_0x141735(0xef))[_0x141735(0xe5)] = _0x141735(0xc8) + _0x59f014 + _0x141735(0x95),
            document['getElementById'](_0x141735(0xdb))['innerHTML'] = _0x141735(0x129),
            document['getElementById'](_0x141735(0x9d))[_0x141735(0xe5)] = formato(temporal) + _0x141735(0x100) + _0x59f014 + _0x141735(0xc3),
            document[_0x141735(0xe6)](_0x141735(0xe2))[_0x141735(0xbc)][_0x141735(0xb7)] = _0x141735(0x122)) : (_0x59f014 = _0x59f014,
            document[_0x141735(0xe6)]('conversiont')[_0x141735(0xe5)] = '',
            document['getElementById'](_0x141735(0xe2))[_0x141735(0xbc)][_0x141735(0xb7)] = 'none');
    }
    document['getElementById']('tabla')[_0x141735(0xbc)][_0x141735(0xb7)] = 'inline-table',
    document[_0x141735(0xe6)](_0x141735(0xae))[_0x141735(0xbc)][_0x141735(0xb7)] = _0x141735(0xfa),
    document[_0x141735(0xe6)](_0x141735(0xe9))[_0x141735(0xbc)][_0x141735(0xb7)] = 'block',
    document[_0x141735(0xe6)]('titulotabla2')['style'][_0x141735(0xb7)] = _0x141735(0x122),
    document[_0x141735(0xe6)]('contendor-procedimientos')[_0x141735(0xbc)][_0x141735(0xb7)] = _0x141735(0x122),
    document[_0x141735(0xe6)](_0x141735(0xb1))[_0x141735(0xbc)][_0x141735(0xb7)] = _0x141735(0x122),
    document['getElementById'](_0x141735(0xd4))[_0x141735(0xbc)][_0x141735(0xb7)] = _0x141735(0x119),
    document[_0x141735(0xe6)](_0x141735(0x104))[_0x141735(0x124)]['remove']('fotoresultado'),
    document[_0x141735(0xe6)](_0x141735(0x104))[_0x141735(0x124)]['add']('fotoresultado2'),
    document['getElementById'](_0x141735(0x13b))[_0x141735(0x124)][_0x141735(0x108)]('contendor-procedimientos');
    if (_0x8308d6 == '') {
        document[_0x141735(0xe6)]('vi')[_0x141735(0x12f)] = '0';
        var _0x8308d6 = document['getElementById']('vi')[_0x141735(0x12f)];
        document['getElementById']('vi')[_0x141735(0x12f)] = '';
    }
    if (_0x8308d6 != '' && _0x59f014 != '' && _0x532397 != '' && _0x2e71a4 == '' && _0x3c2e3a == '') {
        _0x3c2e3a = _0x8308d6 * _0x59f014 + 0x1 / 0x2 * _0x532397 * Math[_0x141735(0xdc)](_0x59f014, 0x2),
        _0x2e71a4 = Math[_0x141735(0xc4)](Math[_0x141735(0xdc)](_0x8308d6, 0x2) + 0x2 * _0x532397 * _0x3c2e3a),
        document[_0x141735(0xe6)](_0x141735(0x11a))[_0x141735(0xe5)] = 'Distancia\x20=\x20Velocidad\x20inicial\x20*\x20Tiempo\x20+\x20<div\x20class=fraction><span\x20class=fup>1</span><span\x20class=bar>/</span><span\x20class=fdn>2</span></div>\x20*\x20Aceleración\x20*\x20Tiempo²\x20=\x20' + formato(_0x8308d6) + '\x20*\x20' + formato(_0x59f014) + _0x141735(0xfd) + formato(_0x532397) + _0x141735(0x11f) + formato(_0x59f014) + '²\x20=\x20<span\x20class=borderes>' + formato(_0x3c2e3a) + _0x141735(0xf9),
        document[_0x141735(0xe6)]('frml2')[_0x141735(0xe5)] = _0x141735(0x127) + formato(_0x8308d6) + _0x141735(0xba) + formato(_0x532397) + _0x141735(0x11f) + formato(_0x3c2e3a) + _0x141735(0x12e) + formato(_0x2e71a4) + _0x141735(0xaf);
        let _0x445d7c = 'distancia';
        convertir_unidad(_0x445d7c, 0x1, _0x3c2e3a);
        let _0x5c39d0 = 'vf';
        convertir_unidad(_0x5c39d0, 0x2, _0x2e71a4);
    } else {
        if (_0x2e71a4 != '' && _0x59f014 != '' && _0x532397 != '' && _0x8308d6 == '' && _0x3c2e3a == '') {
            _0x3c2e3a = _0x2e71a4 * _0x59f014 - 0x1 / 0x2 * _0x532397 * Math[_0x141735(0xdc)](_0x59f014, 0x2),
            _0x8308d6 = Math['sqrt'](Math[_0x141735(0xdc)](_0x2e71a4, 0x2) - 0x2 * _0x532397 * _0x3c2e3a),
            document[_0x141735(0xe6)](_0x141735(0x11a))[_0x141735(0xe5)] = _0x141735(0x11d) + formato(_0x2e71a4) + _0x141735(0x11f) + formato(_0x59f014) + '\x20-\x20<div\x20class=fraction><span\x20class=fup>\x20\x201\x20</span><span\x20class=bar>/</span><span\x20class=fdn>2</span></div>\x20*\x20' + formato(_0x532397) + _0x141735(0x11f) + formato(_0x59f014) + '²\x20=\x20<span\x20class=borderes>' + formato(_0x3c2e3a) + _0x141735(0xf9),
            document['getElementById'](_0x141735(0xfe))[_0x141735(0xe5)] = 'Velocidad\x20final\x20=\x20√(velocidad\x20final²\x20-\x202\x20*\x20Aceleración\x20*\x20Distancia)\x20=\x20√(' + formato(_0x2e71a4) + _0x141735(0x9b) + formato(_0x532397) + '\x20*\x20' + formato(_0x3c2e3a) + _0x141735(0x12e) + formato(_0x8308d6) + _0x141735(0xaf);
            let _0x4a3ce8 = _0x141735(0xb6);
            convertir_unidad(_0x4a3ce8, 0x1, _0x3c2e3a);
            let _0x543ee9 = 'vi';
            convertir_unidad(_0x543ee9, 0x2, _0x8308d6);
        } else {
            if (_0x8308d6 != '' && _0x59f014 != '' && _0x2e71a4 != '' && _0x532397 == '' && _0x3c2e3a == '') {
                _0x3c2e3a = (parseFloat(_0x8308d6) + parseFloat(_0x2e71a4)) / 0x2 * _0x59f014,
                _0x532397 = (parseFloat(_0x3c2e3a) - _0x8308d6 * _0x59f014) / (0.5 * Math[_0x141735(0xdc)](_0x59f014, 0x2)),
                document[_0x141735(0xe6)](_0x141735(0x11a))['innerHTML'] = _0x141735(0x137) + _0x141735(0x10e) + formato(_0x8308d6) + _0x141735(0x9f) + formato(_0x2e71a4) + _0x141735(0xad) + _0x141735(0x11f) + formato(_0x59f014) + '\x20=\x20<span\x20class=borderes>' + formato(_0x3c2e3a) + _0x141735(0xf9),
                document[_0x141735(0xe6)](_0x141735(0xfe))[_0x141735(0xe5)] = _0x141735(0xda) + '<div\x20class=fraction><span\x20class=fup>' + formato(_0x3c2e3a) + _0x141735(0x99) + formato(_0x8308d6) + _0x141735(0x11f) + formato(_0x59f014) + _0x141735(0x112) + formato(_0x59f014) + _0x141735(0x110) + _0x141735(0x10c) + formato(_0x532397) + _0x141735(0x11e);
                let _0x39fb8d = _0x141735(0xb6);
                convertir_unidad(_0x39fb8d, 0x1, _0x3c2e3a);
                let _0x487a94 = _0x141735(0xed);
                convertir_unidad(_0x487a94, 0x2, _0x532397);
            } else {
                if (_0x2e71a4 != '' && _0x8308d6 != '' && _0x532397 != '' && _0x59f014 == '' && _0x3c2e3a == '') {
                    _0x3c2e3a = (Math['pow'](_0x2e71a4, 0x2) - Math[_0x141735(0xdc)](_0x8308d6, 0x2)) / (0x2 * _0x532397),
                    _0x59f014 = 0x2 * _0x3c2e3a / (parseFloat(_0x8308d6) + parseFloat(_0x2e71a4)),
                    document['getElementById'](_0x141735(0x11a))['innerHTML'] = _0x141735(0xe4) + _0x141735(0x10e) + formato(_0x2e71a4) + '²\x20-\x20' + formato(_0x8308d6) + _0x141735(0xa6) + formato(_0x532397) + _0x141735(0x94) + _0x141735(0x10c) + formato(_0x3c2e3a) + _0x141735(0xf9),
                    document[_0x141735(0xe6)](_0x141735(0xfe))['innerHTML'] = 'Tiempo\x20=\x20<div\x20class=fraction><span\x20class=fup>2\x20*\x20Distancia</span><span\x20class=bar>/</span><span\x20class=fdn>Velocidad\x20inicial\x20+\x20Velocidad\x20final</span></div>\x20=\x20' + '<div\x20class=fraction><span\x20class=fup>\x202\x20*' + formato(_0x3c2e3a) + '\x20</span><span\x20class=bar>/</span><span\x20class=fdn>' + formato(_0x8308d6) + '\x20+\x20' + formato(_0x2e71a4) + _0x141735(0x131) + '\x20=\x20<span\x20class=borderes>' + formato(_0x59f014) + _0x141735(0xb3);
                    let _0x21113c = _0x141735(0xb6);
                    convertir_unidad(_0x21113c, 0x1, _0x3c2e3a);
                    let _0x63ca92 = 'tiempo';
                    convertir_unidad(_0x63ca92, 0x2, _0x59f014);
                } else {
                    if (_0x2e71a4 != '' && _0x3c2e3a != '' && _0x532397 != '' && _0x8308d6 == '' && _0x59f014 == '') {
                        _0x8308d6 = Math[_0x141735(0xc4)](Math[_0x141735(0xdc)](_0x2e71a4, 0x2) - 0x2 * _0x532397 * _0x3c2e3a),
                        _0x59f014 = 0x2 * _0x3c2e3a / (parseFloat(_0x8308d6) + parseFloat(_0x2e71a4)),
                        document[_0x141735(0xe6)]('frml1')['innerHTML'] = _0x141735(0xa1) + formato(_0x2e71a4) + '²\x20-\x202\x20*\x20' + formato(_0x532397) + _0x141735(0x11f) + formato(_0x3c2e3a) + _0x141735(0x12e) + formato(_0x8308d6) + '\x20m/s</span>',
                        document[_0x141735(0xe6)](_0x141735(0xfe))[_0x141735(0xe5)] = _0x141735(0x102) + '<div\x20class=fraction><span\x20class=fup>\x202\x20*' + formato(_0x3c2e3a) + _0x141735(0x107) + formato(_0x8308d6) + _0x141735(0x9f) + formato(_0x2e71a4) + '\x20</span></div>\x20\x20' + _0x141735(0x10c) + formato(_0x59f014) + _0x141735(0xb3);
                        let _0x131094 = 'vi';
                        convertir_unidad(_0x131094, 0x1, _0x8308d6);
                        let _0x57ae5f = 'tiempo';
                        convertir_unidad(_0x57ae5f, 0x2, _0x59f014);
                    } else {
                        if (_0x59f014 != '' && _0x3c2e3a != '' && _0x532397 != '' && _0x8308d6 == '' && _0x2e71a4 == '') {
                            _0x8308d6 = _0x3c2e3a / _0x59f014 - 0.5 * (_0x532397 * _0x59f014),
                            _0x2e71a4 = _0x8308d6 + _0x532397 * _0x59f014,
                            document['getElementById']('frml1')['innerHTML'] = _0x141735(0xe1) + _0x141735(0x10e) + formato(_0x3c2e3a) + '\x20</span><span\x20class=bar>/</span><span\x20class=fdn>' + formato(_0x59f014) + _0x141735(0xeb) + _0x141735(0x11b) + formato(_0x532397) + _0x141735(0x11f) + formato(_0x59f014) + '\x20=\x20<span\x20class=borderes>' + formato(_0x8308d6) + '\x20m/s</span>',
                            document['getElementById'](_0x141735(0xfe))['innerHTML'] = _0x141735(0x111) + '=\x20' + formato(_0x8308d6) + _0x141735(0x9f) + formato(_0x532397) + _0x141735(0x11f) + formato(_0x59f014) + '\x20\x20\x20=\x20<span\x20class=borderes>' + formato(_0x2e71a4) + _0x141735(0xaf);
                            let _0x42bc38 = 'vi';
                            convertir_unidad(_0x42bc38, 0x1, _0x8308d6);
                            let _0x31567d = 'vf';
                            convertir_unidad(_0x31567d, 0x2, _0x2e71a4);
                        } else {
                            if (_0x59f014 != '' && _0x3c2e3a != '' && _0x2e71a4 != '' && _0x8308d6 == '' && _0x532397 == '') {
                                _0x8308d6 = 0x2 * (_0x3c2e3a / _0x59f014) - _0x2e71a4,
                                _0x532397 = (Math[_0x141735(0xdc)](_0x2e71a4, 0x2) - Math['pow'](_0x8308d6, 0x2)) / (0x2 * _0x3c2e3a),
                                document[_0x141735(0xe6)]('frml1')[_0x141735(0xe5)] = _0x141735(0xf0) + '\x202\x20*\x20<div\x20class=fraction><span\x20class=fup>' + formato(_0x3c2e3a) + _0x141735(0x107) + formato(_0x59f014) + _0x141735(0xeb) + '\x20-\x20\x20' + formato(_0x2e71a4) + '\x20=\x20<span\x20class=borderes>' + formato(_0x8308d6) + _0x141735(0xaf),
                                document['getElementById'](_0x141735(0xfe))['innerHTML'] = _0x141735(0xa3) + '<div\x20class=fraction><span\x20class=fup>' + formato(_0x2e71a4) + _0x141735(0xd2) + formato(_0x8308d6) + '²\x20</span><span\x20class=bar>/</span><span\x20class=fdn>\x202\x20*\x20' + formato(_0x3c2e3a) + _0x141735(0xeb) + '\x20=\x20<span\x20class=borderes>' + formato(_0x532397) + _0x141735(0x11e);
                                let _0x4561c9 = 'vi';
                                convertir_unidad(_0x4561c9, 0x1, _0x8308d6);
                                let _0x3bac12 = _0x141735(0xed);
                                convertir_unidad(_0x3bac12, 0x2, _0x532397);
                            } else {
                                if (_0x8308d6 != '' && _0x3c2e3a != '' && _0x532397 != '' && _0x2e71a4 == '' && _0x59f014 == '') {
                                    _0x2e71a4 = Math[_0x141735(0xc4)](Math[_0x141735(0xdc)](_0x8308d6, 0x2) + 0x2 * _0x532397 * _0x3c2e3a),
                                    _0x59f014 = (_0x2e71a4 - _0x8308d6) / _0x532397,
                                    document[_0x141735(0xe6)](_0x141735(0x11a))[_0x141735(0xe5)] = _0x141735(0x127) + formato(_0x8308d6) + '²\x20+\x202\x20*\x20' + formato(_0x532397) + _0x141735(0x11f) + formato(_0x3c2e3a) + ')\x20=\x20<span\x20class=borderes>' + formato(_0x2e71a4) + _0x141735(0xaf),
                                    document[_0x141735(0xe6)]('frml2')['innerHTML'] = _0x141735(0xf5) + _0x141735(0x10e) + formato(_0x2e71a4) + _0x141735(0x99) + formato(_0x8308d6) + _0x141735(0x11c) + formato(_0x532397) + _0x141735(0xeb) + _0x141735(0x10c) + formato(_0x59f014) + _0x141735(0xd3),
                                    document['getElementById']('vf')[_0x141735(0x135)] = 'Calculado',
                                    document['getElementById']('vf')['disabled'] = _0x141735(0x10a),
                                    document['getElementById']('vf')['value'] = '',
                                    document[_0x141735(0xe6)](_0x141735(0xc0))[_0x141735(0x135)] = 'Calculado',
                                    document[_0x141735(0xe6)]('tiempo')[_0x141735(0x93)] = _0x141735(0x10a),
                                    document[_0x141735(0xe6)](_0x141735(0xc0))[_0x141735(0x12f)] = '';
                                    let _0x358793 = 'vf';
                                    convertir_unidad(_0x358793, 0x1, _0x2e71a4);
                                    let _0x2288eb = _0x141735(0xc0);
                                    convertir_unidad(_0x2288eb, 0x2, _0x59f014);
                                } else {
                                    if (_0x8308d6 != '' && _0x3c2e3a != '' && _0x59f014 != '' && _0x2e71a4 == '' && _0x532397 == '') {
                                        _0x2e71a4 = 0x2 * (_0x3c2e3a / _0x59f014) - _0x8308d6,
                                        _0x532397 = (_0x2e71a4 - _0x8308d6) / _0x59f014,
                                        document[_0x141735(0xe6)](_0x141735(0x11a))[_0x141735(0xe5)] = 'Velocidad\x20final=\x202\x20*\x20<div\x20class=fraction><span\x20class=fup>Distancia</span><span\x20class=bar>/</span><span\x20class=fdn>Tiempo</span></div>\x20-\x20Velocidad\x20inicial\x20\x20=\x20' + _0x141735(0xc7) + formato(_0x3c2e3a) + '\x20</span><span\x20class=bar>/</span><span\x20class=fdn>\x20\x20' + formato(_0x59f014) + '</span></div>' + '-\x20' + formato(_0x8308d6) + _0x141735(0x10c) + formato(_0x2e71a4) + _0x141735(0xaf),
                                        document[_0x141735(0xe6)](_0x141735(0xfe))['innerHTML'] = 'Aceleración\x20=<div\x20class=fraction><span\x20class=fup>Velocidad\x20final\x20-\x20Velocidad\x20inicial</span><span\x20class=bar>/</span><span\x20class=fdn>Tiempo</span></div>\x20\x20=\x20' + _0x141735(0x10e) + formato(_0x2e71a4) + '\x20-\x20' + formato(_0x8308d6) + '\x20</span><span\x20class=bar>/</span><span\x20class=fdn>\x20\x20' + formato(_0x59f014) + '</span></div>' + _0x141735(0x10c) + formato(_0x532397) + _0x141735(0x11e);
                                        let _0x450428 = 'vf';
                                        convertir_unidad(_0x450428, 0x1, _0x2e71a4);
                                        let _0x57e43e = _0x141735(0xed);
                                        convertir_unidad(_0x57e43e, 0x2, _0x532397);
                                    } else {
                                        if (_0x8308d6 != '' && _0x3c2e3a != '' && _0x2e71a4 != '' && _0x59f014 == '' && _0x532397 == '') {
                                            _0x59f014 = 0x2 * _0x3c2e3a / (parseFloat(_0x8308d6) + parseFloat(_0x2e71a4)),
                                            _0x532397 = (parseFloat(_0x2e71a4) - parseFloat(_0x8308d6)) / _0x59f014,
                                            document[_0x141735(0xe6)]('frml1')[_0x141735(0xe5)] = _0x141735(0xbb) + _0x141735(0x125) + formato(_0x3c2e3a) + _0x141735(0x11c) + formato(_0x8308d6) + _0x141735(0x9f) + formato(_0x2e71a4) + '</span></div>' + _0x141735(0x10c) + formato(_0x59f014) + _0x141735(0xd3),
                                            document[_0x141735(0xe6)](_0x141735(0xfe))[_0x141735(0xe5)] = _0x141735(0x139) + '<div\x20class=fraction><span\x20class=fup>' + formato(_0x2e71a4) + '\x20-\x20' + formato(_0x8308d6) + '\x20</span><span\x20class=bar>/</span><span\x20class=fdn>\x20\x20' + formato(_0x59f014) + '</span></div>' + '\x20=\x20<span\x20class=borderes>' + formato(_0x532397) + '\x20m/s²</span>';
                                            let _0x1d6f8f = _0x141735(0xc0);
                                            convertir_unidad(_0x1d6f8f, 0x1, _0x59f014);
                                            let _0x2df3a1 = _0x141735(0xed);
                                            convertir_unidad(_0x2df3a1, 0x2, _0x532397);
                                        } else
                                            document[_0x141735(0xe6)]('distancia')[_0x141735(0x93)] = ![],
                                            document[_0x141735(0xe6)]('vi')[_0x141735(0x93)] = ![],
                                            document[_0x141735(0xe6)]('vf')[_0x141735(0x93)] = ![],
                                            document[_0x141735(0xe6)](_0x141735(0xc0))['disabled'] = ![],
                                            document[_0x141735(0xe6)]('aceleracion')[_0x141735(0x93)] = ![],
                                            document[_0x141735(0xe6)](_0x141735(0xb6))[_0x141735(0x135)] = '',
                                            document[_0x141735(0xe6)](_0x141735(0xc0))[_0x141735(0x135)] = '',
                                            document[_0x141735(0xe6)]('vi')['placeholder'] = '',
                                            document[_0x141735(0xe6)]('vf')['placeholder'] = '',
                                            document[_0x141735(0xe6)](_0x141735(0xed))[_0x141735(0x135)] = '',
                                            document['getElementById'](_0x141735(0xf6))[_0x141735(0xbc)][_0x141735(0xb7)] = _0x141735(0xf2),
                                            document['getElementById'](_0x141735(0xae))[_0x141735(0xbc)][_0x141735(0xb7)] = _0x141735(0xf2),
                                            document[_0x141735(0xe6)]('titulotabla')[_0x141735(0xbc)]['display'] = _0x141735(0xf2),
                                            document[_0x141735(0xe6)]('titulotabla2')[_0x141735(0xbc)][_0x141735(0xb7)] = _0x141735(0xf2),
                                            document['getElementById']('tabla-formula2')['style'][_0x141735(0xb7)] = _0x141735(0xf2),
                                            document[_0x141735(0xe6)]('contendor-procedimientos')[_0x141735(0xbc)][_0x141735(0xb7)] = _0x141735(0xf2),
                                            document['getElementById'](_0x141735(0xb1))[_0x141735(0xbc)]['display'] = _0x141735(0xf2),
                                            document['getElementById']('fotoresultado')['classList'][_0x141735(0x9e)](_0x141735(0xf3)),
                                            document['getElementById'](_0x141735(0x104))['classList'][_0x141735(0x108)](_0x141735(0x104)),
                                            document['getElementById'](_0x141735(0x9a))[_0x141735(0xe5)] = _0x141735(0x9c),
                                            document[_0x141735(0xe6)]('resultado2')['innerHTML'] = '';
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
function formato(_0x1e3b12) {
    const _0x3d05c5 = _0x3cff;
    let _0x3ea3b6 = _0x1e3b12['toString']()
      , _0x407a49 = _0x3ea3b6[_0x3d05c5(0x114)]('.');
    if (_0x407a49 != -0x1) {
        let _0x2e7177 = (Math[_0x3d05c5(0xaa)](_0x1e3b12 * 0x64) / 0x64)[_0x3d05c5(0xcd)](0x2);
        return _0x2e7177;
    } else
        return _0x1e3b12;
}
function convertir_unidad(_0x500bee, _0x3fc2d1, _0x162f84) {
    const _0x3701c4 = _0x3cff;
    var _0xa04787 = document[_0x3701c4(0xe6)](_0x3701c4(0xe8))[_0x3701c4(0x12f)], _0x31fa7e = document['getElementById'](_0x3701c4(0xec))['value'], _0x41e5d5 = document[_0x3701c4(0xe6)](_0x3701c4(0xfc))['value'], _0x10f1ca = document[_0x3701c4(0xe6)](_0x3701c4(0xdd))[_0x3701c4(0x12f)], _0x3d77b7, _0x1cef73, _0x2119ed;
    n = _0x3fc2d1['toString']();
    if (_0x500bee == 'tiempo') {
        tiempo = _0x162f84;
        if (_0x10f1ca == 'min')
            temporal = tiempo,
            tiempo = tiempo / 0x3c,
            document['getElementById']('conversionres' + n + '' + n + '')[_0x3701c4(0xe5)] = formato(temporal) + _0x3701c4(0xbd) + _0x3701c4(0xd1) + tiempo + _0x3701c4(0xb8),
            document[_0x3701c4(0xe6)](_0x3701c4(0xcf) + n + '')[_0x3701c4(0xe5)] = _0x3701c4(0xab),
            document[_0x3701c4(0xe6)](_0x3701c4(0xc2) + n + '')['style'][_0x3701c4(0xb7)] = 'block';
        else
            _0x10f1ca == _0x3701c4(0xa4) ? (temporal = tiempo,
            tiempo = tiempo / 0xe10,
            document[_0x3701c4(0xe6)](_0x3701c4(0xcf) + n + '' + n + '')[_0x3701c4(0xe5)] = formato(temporal) + _0x3701c4(0xbd) + '\x20/3600\x20=\x20' + tiempo + _0x3701c4(0x118),
            document[_0x3701c4(0xe6)]('conversionres' + n + '')[_0x3701c4(0xe5)] = 'Conversión\x20de\x20tiempo\x20:\x20segundos\x20a\x20horas',
            document[_0x3701c4(0xe6)](_0x3701c4(0x12c))[_0x3701c4(0xbc)][_0x3701c4(0xb7)] = _0x3701c4(0x122),
            _0x10f1ca = _0x3701c4(0x132)) : (document['getElementById'](_0x3701c4(0xcf) + n + '' + n + '')['innerHTML'] = '',
            document[_0x3701c4(0xe6)](_0x3701c4(0xcf) + n + '')[_0x3701c4(0xe5)] = '',
            document[_0x3701c4(0xe6)](_0x3701c4(0xc2) + n + '')[_0x3701c4(0xbc)]['display'] = _0x3701c4(0xf2));
        _0x3d77b7 = _0x3701c4(0x133),
        _0x1cef73 = tiempo,
        _0x2119ed = _0x10f1ca;
    }
    _0x500bee == 'vf' && (vf = _0x162f84,
    _0x41e5d5 == _0x3701c4(0xa2) ? (temporal = vf,
    vf = vf * 3.6,
    document[_0x3701c4(0xe6)](_0x3701c4(0xcf) + n + '' + n + '')[_0x3701c4(0xe5)] = formato(temporal) + _0x3701c4(0x130) + _0x3701c4(0x120) + vf + _0x3701c4(0xa7),
    document[_0x3701c4(0xe6)]('conversionres' + n + '')[_0x3701c4(0xe5)] = _0x3701c4(0x13a),
    document[_0x3701c4(0xe6)](_0x3701c4(0x12c))['style'][_0x3701c4(0xb7)] = 'block') : (document[_0x3701c4(0xe6)](_0x3701c4(0xcf) + n + '' + n + '')['innerHTML'] = '',
    document[_0x3701c4(0xe6)]('conversionres' + n + '')[_0x3701c4(0xe5)] = '',
    document[_0x3701c4(0xe6)](_0x3701c4(0xc2) + n + '')[_0x3701c4(0xbc)]['display'] = _0x3701c4(0xf2)),
    _0x3d77b7 = _0x3701c4(0xdf),
    _0x1cef73 = vf,
    _0x2119ed = _0x41e5d5);
    _0x500bee == 'vi' && (vi = _0x162f84,
    _0x31fa7e == _0x3701c4(0xa2) ? (temporal = vi,
    vi = vi * 3.6,
    document['getElementById'](_0x3701c4(0xcf) + n + '' + n + '')[_0x3701c4(0xe5)] = formato(temporal) + _0x3701c4(0x130) + '\x20*\x203,6\x20=\x20' + vi + _0x3701c4(0xa7),
    document[_0x3701c4(0xe6)]('conversionres' + n + '')[_0x3701c4(0xe5)] = _0x3701c4(0x115),
    document[_0x3701c4(0xe6)](_0x3701c4(0x12c))[_0x3701c4(0xbc)][_0x3701c4(0xb7)] = _0x3701c4(0x122)) : (document[_0x3701c4(0xe6)](_0x3701c4(0xcf) + n + '' + n + '')['innerHTML'] = '',
    document[_0x3701c4(0xe6)](_0x3701c4(0xcf) + n + '')['innerHTML'] = '',
    document['getElementById'](_0x3701c4(0xc2) + n + '')[_0x3701c4(0xbc)][_0x3701c4(0xb7)] = _0x3701c4(0xf2)),
    _0x3d77b7 = 'la\x20velocidad\x20inicial',
    _0x1cef73 = vi,
    _0x2119ed = _0x31fa7e);
    if (_0x500bee == 'distancia') {
        distancia = _0x162f84;
        if (_0xa04787 == 'cm')
            temporal = distancia,
            distancia = distancia * 0x64,
            document[_0x3701c4(0xe6)](_0x3701c4(0xcf) + n + '' + n + '')['innerHTML'] = formato(temporal) + _0x3701c4(0x12d) + '\x20*\x20100\x20=\x20' + distancia + '\x20cm',
            document['getElementById'](_0x3701c4(0xcf) + n + '')['innerHTML'] = _0x3701c4(0xbf),
            document[_0x3701c4(0xe6)]('divconversionres' + n + '')['style']['display'] = 'block';
        else
            _0xa04787 == 'km' ? (temporal = distancia,
            distancia = distancia / 0x3e8,
            document[_0x3701c4(0xe6)]('conversionres' + n + '' + n + '')[_0x3701c4(0xe5)] = formato(temporal) + _0x3701c4(0x12d) + _0x3701c4(0x121) + distancia + _0x3701c4(0xd0),
            document['getElementById'](_0x3701c4(0xcf) + n + '')[_0x3701c4(0xe5)] = _0x3701c4(0x96),
            document[_0x3701c4(0xe6)](_0x3701c4(0xc2) + n + '')[_0x3701c4(0xbc)][_0x3701c4(0xb7)] = _0x3701c4(0x122)) : (document[_0x3701c4(0xe6)](_0x3701c4(0xcf) + n + '' + n + '')[_0x3701c4(0xe5)] = '',
            document['getElementById'](_0x3701c4(0xcf) + n + '')[_0x3701c4(0xe5)] = '',
            document[_0x3701c4(0xe6)](_0x3701c4(0xc2) + n + '')[_0x3701c4(0xbc)][_0x3701c4(0xb7)] = 'none');
        _0x3d77b7 = _0x3701c4(0x10d),
        _0x1cef73 = distancia,
        _0x2119ed = _0xa04787;
    }
    _0x500bee == _0x3701c4(0xed) && (_0x3d77b7 = _0x3701c4(0x101),
    _0x1cef73 = _0x162f84,
    _0x2119ed = _0x3701c4(0x116)),
    _0x3fc2d1 == '1' && (document[_0x3701c4(0xe6)](_0x3701c4(0x9a))[_0x3701c4(0xe5)] = 'Se\x20ha\x20calculado\x20' + _0x3d77b7 + _0x3701c4(0xee) + _0x1cef73 + _0x3701c4(0x123) + _0x2119ed + _0x3701c4(0xd6),
    document['getElementById'](_0x3701c4(0xe9))[_0x3701c4(0xe5)] = _0x3701c4(0xce) + _0x3d77b7['toUpperCase'](),
    document[_0x3701c4(0xe6)](_0x3701c4(0xc1))[_0x3701c4(0xe5)] = _0x3701c4(0xd5) + _0x3d77b7,
    document[_0x3701c4(0xe6)]('' + _0x500bee + '')[_0x3701c4(0x135)] = _0x3701c4(0xff),
    document[_0x3701c4(0xe6)]('' + _0x500bee + '')[_0x3701c4(0x93)] = _0x3701c4(0x10a),
    document[_0x3701c4(0xe6)]('' + _0x500bee + '')[_0x3701c4(0x12f)] = ''),
    _0x3fc2d1 == '2' && (document[_0x3701c4(0xe6)](_0x3701c4(0xb4))[_0x3701c4(0xe5)] = 'y\x20se\x20obtuvo\x20' + _0x3d77b7 + _0x3701c4(0xee) + _0x1cef73 + '</span>\x20<span\x20class=ResultSmall>' + _0x2119ed + '\x20</span>\x20',
    document['getElementById'](_0x3701c4(0x126))['innerHTML'] = _0x3701c4(0xce) + _0x3d77b7[_0x3701c4(0xf7)](),
    document[_0x3701c4(0xe6)](_0x3701c4(0xde))[_0x3701c4(0xe5)] = _0x3701c4(0xd5) + _0x3d77b7,
    document[_0x3701c4(0xe6)]('' + _0x500bee + '')[_0x3701c4(0x135)] = 'Calculado',
    document['getElementById']('' + _0x500bee + '')['disabled'] = _0x3701c4(0x10a),
    document[_0x3701c4(0xe6)]('' + _0x500bee + '')[_0x3701c4(0x12f)] = '');
}
function limpiar() {
    const _0x395b82 = _0x3cff;
    document['getElementById']('distancia')[_0x395b82(0x12f)] = '',
    document[_0x395b82(0xe6)]('vi')[_0x395b82(0x12f)] = '0',
    document[_0x395b82(0xe6)]('vf')[_0x395b82(0x12f)] = '',
    document['getElementById'](_0x395b82(0xc0))[_0x395b82(0x12f)] = '',
    document[_0x395b82(0xe6)](_0x395b82(0xed))[_0x395b82(0x12f)] = '';
}
document['getElementById']('calcular5')['addEventListener'](_0x4d6576(0x10f), function() {
    var _0x4e1caa = setInterval(captura, 0x258);
}),
document[_0x4d6576(0xe6)](_0x4d6576(0xd9))[_0x4d6576(0x106)](_0x4d6576(0x10f), function() {
    var _0x27f2b9 = setInterval(captura, 0x258);
}),
document['getElementById'](_0x4d6576(0x117))['addEventListener']('click', function() {
    var _0x5c017e = setInterval(captura, 0x258);
}),
document[_0x4d6576(0xe6)]('calcular2')[_0x4d6576(0x106)](_0x4d6576(0x10f), function() {
    var _0x146593 = setInterval(captura, 0x258);
}),
document[_0x4d6576(0xe6)](_0x4d6576(0x97))['addEventListener'](_0x4d6576(0x10f), function() {
    var _0x4ff82f = setInterval(captura, 0x258);
});
function _0x3cff(_0x1e2558, _0x1e6d4c) {
    const _0x2c87ba = _0x2c87();
    return _0x3cff = function(_0x3cffc6, _0x254ca8) {
        _0x3cffc6 = _0x3cffc6 - 0x93;
        let _0x17cb12 = _0x2c87ba[_0x3cffc6];
        return _0x17cb12;
    }
    ,
    _0x3cff(_0x1e2558, _0x1e6d4c);
}
function _0x2c87() {
    const _0x2478d6 = ['Tiempo\x20=\x20\x20<div\x20class=fraction><span\x20class=fup>\x202\x20*\x20Distancia</span><span\x20class=bar>/</span><span\x20class=fdn>Velocidad\x20inicial\x20+\x20Velocidad\x20final</span></div>\x20=\x20', 'style', '\x20<sub\x20class=p-formulas>s</sub>', '681545zuAKjR', 'Conversión\x20de\x20distancia\x20:\x20metros\x20a\x20Centimetros', 'tiempo', 'titulooperacion1', 'divconversionres', '<sub\x20class=\x27p-formulas\x27>\x20seg</sub>', 'sqrt', '<sub\x20class=\x27p-formulas\x27>\x20metros</sub>', '*1000\x20=\x20', '\x202\x20*\x20<div\x20class=fraction><span\x20class=fup>', '*3600\x20=\x20', '<sub\x20class=\x27p-formulas\x27>km/h</sub>\x20/\x203.6\x20=\x20', 'conversionx2', 'conversionvf2', 'Conversión\x20de\x20tiempo\x20:\x20minutos\x20a\x20segundos', 'toFixed', 'PROCEDIMIENTO\x20PARA\x20HALLAR\x20', 'conversionres', '\x20km', '\x20/60\x20=\x20', '²\x20-\x20', '\x20seg</span>', 'tabla-formula2', 'Resolver\x20formula\x20para\x20hallar\x20', '\x20</span>\x20', '\x20metros', '334562lzUfsZ', 'calcular4', 'Aceleración\x20=\x20<div\x20class=fraction><span\x20class=fup>Distancia\x20-\x20Velocidad\x20inicial\x20*\x20Tiempo</span><span\x20class=bar>/</span><span\x20class=fdn>2\x20*\x20tiempo²</span></div>\x20=\x20', 'conversiont1', 'pow', 'unidadt', 'titulooperacion2', 'la\x20velocidad\x20final', '1399488xRNlKD', 'Velocidad\x20inicial\x20=\x20<div\x20class=fraction><span\x20class=fup>Distancia</span><span\x20class=bar>/</span><span\x20class=fdn>Tiempo</span></div>-0.5\x20*\x20Aceleración\x20*\x20tiempo\x20=\x20', 'divtiempo', 'divvi', 'Distancia\x20=\x20<div\x20class=fraction><span\x20class=fup>Velocidad\x20final²\x20-\x20\x20Velocidad\x20inicial²</span><span\x20class=bar>/</span><span\x20class=fdn>2\x20*\x20Aceleración</span></div>\x20=\x20', 'innerHTML', 'getElementById', '2617768pxPDzC', 'unidadx', 'titulotabla', 'divdistancia', '</span></div>', 'unidadvi', 'aceleracion', ':\x20<br><span\x20class=ResultBig>', 'conversiont', 'Velocidad\x20inicial\x20=\x202\x20*\x20<div\x20class=fraction><span\x20class=fup>Distancia</span><span\x20class=bar>/</span><span\x20class=fdn>Tiempo</span></div>\x20-\x20Velocidad\x20final\x20=\x20', '238487wTBrqi', 'none', 'fotoresultado2', '2545179VNoFfc', 'Tiempo\x20=<div\x20class=fraction><span\x20class=fup>Velocidad\x20final\x20-\x20Velocidad\x20inicial</span><span\x20class=bar>/</span><span\x20class=fdn>Aceleración</span></div>\x20\x20=\x20', 'tabla', 'toUpperCase', '*60\x20=\x20', '\x20m</span>', 'inline-table', '6WPVPIs', 'unidadvf', '\x20+\x20<div\x20class=fraction><span\x20class=fup>\x20\x201\x20</span><span\x20class=bar>/</span><span\x20class=fdn>2</span></div>\x20*\x20', 'frml2', 'Calculado', '<sub\x20class=\x27p-formulas\x27>\x20h</sub>\x20*\x203600\x20=\x20', 'la\x20aceleración', 'Tiempo\x20=\x20<div\x20class=fraction><span\x20class=fup>2\x20*\x20Distancia</span><span\x20class=bar>/</span><span\x20class=fdn>Velocidad\x20inicial\x20+\x20Velocidad\x20final</span></div>\x20=\x20', 'Conversión\x20de\x20velocidad\x20inicial\x20:\x20km/h\x20a\x20m/s', 'fotoresultado', '9sSZHuB', 'addEventListener', '\x20</span><span\x20class=bar>/</span><span\x20class=fdn>', 'add', 'Conversión\x20de\x20distancia\x20:\x20centimetros\x20a\x20metros', 'true', '<sub\x20class=\x27p-formulas\x27>\x20min</sub>\x20*\x2060\x20=\x20', '\x20=\x20<span\x20class=borderes>', 'la\x20distancia', '<div\x20class=fraction><span\x20class=fup>', 'click', '²\x20</span></div>\x20\x20', 'Velocidad\x20final\x20=\x20Velocidad\x20inicial\x20+\x20Aceleración\x20*\x20Tiempo\x20', '\x20</span><span\x20class=bar>/</span><span\x20class=fdn>0.5\x20*\x20', 'conversionvi1', 'indexOf', 'Conversión\x20de\x20velocidad\x20inicial\x20:\x20m/s\x20a\x20km/h', 'm/s²', 'calcular3', '\x20hr', 'table-cell', 'frml1', '\x20-\x200.5\x20*\x20', '\x20</span><span\x20class=bar>/</span><span\x20class=fdn>\x20\x20', 'Distancia\x20=\x20Velocidad\x20final\x20*\x20Tiempo\x20-\x20<div\x20class=fraction><span\x20class=fup>1</span><span\x20class=bar>/</span><span\x20class=fdn>2</span></div>\x20*\x20Aceleración\x20*\x20Tiempo²\x20=\x20', '\x20m/s²</span>', '\x20*\x20', '\x20*\x203,6\x20=\x20', '\x20/\x201000\x20=\x20', 'block', '</span>\x20<span\x20class=ResultSmall>', 'classList', '\x20<div\x20class=fraction><span\x20class=fup>\x202\x20*\x20', 'titulotabla2', 'Velocidad\x20final\x20=\x20√(velocidad\x20inicial²\x20+\x202\x20*\x20Aceleración\x20*\x20Distancia)\x20=\x20√(', 'conversionvi2', 'Conversión\x20de\x20tiempo\x20:\x20horas\x20a\x20segundos', 'conversionvf', '<sub\x20class=\x27p-formulas\x27>cm</sub>\x20/\x20100\x20=\x20', 'divconversionres1', '\x20<sub\x20class=p-formulas>m</sub>', ')\x20=\x20<span\x20class=borderes>', 'value', '\x20<sub\x20class=p-formulas>m/s</sub>', '\x20</span></div>\x20\x20', 'horas', 'el\x20tiempo', 'conversionvf1', 'placeholder', '12SrKKwJ', 'Distancia\x20=\x20<div\x20class=fraction><span\x20class=fup>Velocidad\x20inicial\x20+\x20Velocidad\x20final</span><span\x20class=bar>/</span><span\x20class=fdn>2\x20*\x20tiempo</span></div>\x20=\x20', '418aaxsul', 'Aceleración\x20=\x20<div\x20class=fraction><span\x20class=fup>Velocidad\x20final\x20-\x20Velocidad\x20inicial</span><span\x20class=bar>/</span><span\x20class=fdn>Tiempo</span></div>\x20\x20=\x20', 'Conversión\x20de\x20velocidad\x20final\x20:\x20m/s\x20a\x20km/h', 'contendor-procedimientos', 'disabled', '</span></div>\x20\x20', '\x20segundos', 'Conversión\x20de\x20distancia\x20:\x20metros\x20a\x20Kilometros', 'calcular1', 'conversionvi', '\x20-\x20', 'resultado', '²\x20-\x202\x20*\x20', 'Aquí\x20se\x20mostrará\x20el\x20resultado\x20de\x20la\x20operación', 'conversiont2', 'remove', '\x20+\x20', 'conversionx1', 'Velocidad\x20inicial\x20=\x20√(\x20Velocidad\x20final²\x20-\x202\x20*\x20Aceleración\x20*\x20Distancia)\x20=\x20\x20√(', 'km/h', 'Aceleracion\x20=<div\x20class=fraction><span\x20class=fup>Velocidad\x20final²\x20-\x20Velocidad\x20inicial²</span><span\x20class=bar>/</span><span\x20class=fdn>2\x20*\x20Distancia</span></div>\x20\x20=\x20', 'hora', 'divvf', '²\x20</span><span\x20class=bar>/</span><span\x20class=fdn>2\x20*\x20', '\x20km/h', '<sub\x20class=\x27p-formulas\x27>\x20m/s</sub>', '\x20m/s', 'trunc', 'Conversión\x20de\x20\x20tiempo\x20:\x20segundos\x20a\x20minutos', '/3.6\x20=\x20', '\x20</span><span\x20class=bar>/</span><span\x20class=fdn>2\x20</span></div>\x20\x20', 'tabla2', '\x20m/s</span>', 'min', 'contendor-procedimientos2', 'Conversión\x20de\x20velocidad\x20final\x20:\x20km/h\x20a\x20m/s', '\x20s</span>', 'resultado2', 'conversiond', 'distancia', 'display', '\x20min', '265910zptdsy', '²\x20+\x202\x20*\x20'];
    _0x2c87 = function() {
        return _0x2478d6;
    }
    ;
    return _0x2c87();
}
