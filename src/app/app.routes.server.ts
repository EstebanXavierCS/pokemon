import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'home',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'list/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => [
      { id: '1' },
      { id: '2' },
      { id: '3' },
      { id: '4' },
      { id: '5' }
      // Añade aquí todos los IDs que desees prerender
    ]
  },
  {
    path: 'pokemon/:name',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => [
      { name: 'chikorita' },
      { name: 'bayleef' },
      { name: 'meganium' },
      { name: 'cyndaquil' },
      { name: 'quilava' },
      { name: 'typhlosion' },
      { name: 'totodile' },
      { name: 'croconaw' },
      { name: 'feraligatr' },
      { name: 'pidgey' },
      { name: 'pidgeotto' },
      { name: 'pidgeot' },
      { name: 'spearow' },
      { name: 'fearow' },
      { name: 'hoothoot' },
      { name: 'noctowl' },
      { name: 'rattata' },
      { name: 'raticate' },
      { name: 'sentret' },
      { name: 'furret' },
      { name: 'pichu' },
      { name: 'pikachu' },
      { name: 'raichu' },
      { name: 'caterpie' },
      { name: 'metapod' },
      { name: 'butterfree' },
      { name: 'weedle' },
      { name: 'kakuna' },
      { name: 'beedrill' },
      { name: 'ledyba' },
      { name: 'ledian' },
      { name: 'spinarak' },
      { name: 'ariados' },
      { name: 'geodude' },
      { name: 'graveler' },
      { name: 'golem' },
      { name: 'zubat' },
      { name: 'golbat' },
      { name: 'crobat' },
      { name: 'cleffa' },
      { name: 'clefairy' },
      { name: 'clefable' },
      { name: 'igglybuff' },
      { name: 'jigglypuff' },
      { name: 'wigglytuff' },
      { name: 'togepi' },
      { name: 'togetic' },
      { name: 'sandshrew' },
      { name: 'sandslash' },
      { name: 'ekans' },
      { name: 'arbok' },
      { name: 'dunsparce' },
      { name: 'mareep' },
      { name: 'flaaffy' },
      { name: 'ampharos' },
      { name: 'wooper' },
      { name: 'quagsire' },
      { name: 'gastly' },
      { name: 'haunter' },
      { name: 'gengar' },
      { name: 'unown' },
      { name: 'onix' },
      { name: 'steelix' },
      { name: 'bellsprout' },
      { name: 'weepinbell' },
      { name: 'victreebel' },
      { name: 'hoppip' },
      { name: 'skiploom' },
      { name: 'jumpluff' },
      { name: 'paras' },
      { name: 'parasect' },
      { name: 'poliwag' },
      { name: 'poliwhirl' },
      { name: 'poliwrath' },
      { name: 'politoed' },
      { name: 'magikarp' },
      { name: 'gyarados' },
      { name: 'goldeen' },
      { name: 'seaking' },
      { name: 'slowpoke' },
      { name: 'slowbro' },
      { name: 'slowking' },
      { name: 'oddish' },
      { name: 'gloom' },
      { name: 'vileplume' },
      { name: 'bellossom' },
      { name: 'drowzee' },
      { name: 'hypno' },
      { name: 'abra' },
      { name: 'kadabra' },
      { name: 'alakazam' },
      { name: 'ditto' },
      { name: 'pineco' },
      { name: 'forretress' },
      { name: 'nidoran-f' },
      { name: 'nidorina' },
      { name: 'nidoqueen' },
      { name: 'nidoran-m' },
      { name: 'nidorino' },
      { name: 'nidoking' },
      { name: 'yanma' },
      { name: 'sunkern' },
      { name: 'sunflora' },
      { name: 'exeggcute' },
      { name: 'exeggutor' },
      { name: 'sudowoodo' },
      { name: 'wobbuffet' },
      { name: 'venonat' },
      { name: 'venomoth' },
      { name: 'scyther' },
      { name: 'scizor' },
      { name: 'pinsir' },
      { name: 'heracross' },
      { name: 'koffing' },
      { name: 'weezing' },
      { name: 'grimer' },
      { name: 'muk' },
      { name: 'magnemite' },
      { name: 'magneton' },
      { name: 'voltorb' },
      { name: 'electrode' },
      { name: 'aipom' },
      { name: 'snubbull' },
      { name: 'granbull' },
      { name: 'vulpix' },
      { name: 'ninetales' },
      { name: 'growlithe' },
      { name: 'arcanine' },
      { name: 'stantler' },
      { name: 'marill' },
      { name: 'azumarill' },
      { name: 'diglett' },
      { name: 'dugtrio' },
      { name: 'mankey' },
      { name: 'primeape' },
      { name: 'meowth' },
      { name: 'persian' },
      { name: 'psyduck' },
      { name: 'golduck' },
      { name: 'machop' },
      { name: 'machoke' },
      { name: 'machamp' },
      { name: 'tyrogue' },
      { name: 'hitmonlee' },
      { name: 'hitmonchan' },
      { name: 'hitmontop' },
      { name: 'girafarig' },
      { name: 'tauros' },
      { name: 'miltank' },
      { name: 'magby' },
      { name: 'magmar' },
      { name: 'smoochum' },
      { name: 'jynx' },
      { name: 'elekid' },
      { name: 'electabuzz' },
      { name: 'mr-mime' },
      { name: 'smeargle' },
      { name: 'farfetchd' },
      { name: 'natu' },
      { name: 'xatu' },
      { name: 'qwilfish' },
      { name: 'tentacool' },
      { name: 'tentacruel' },
      { name: 'krabby' },
      { name: 'kingler' },
      { name: 'shuckle' },
      { name: 'staryu' },
      { name: 'starmie' },
      { name: 'shellder' },
      { name: 'cloyster' },
      { name: 'corsola' },
      { name: 'remoraid' },
      { name: 'octillery' },
      { name: 'chinchou' },
      { name: 'lanturn' },
      { name: 'seel' },
      { name: 'dewgong' },
      { name: 'lickitung' },
      { name: 'tangela' },
      { name: 'eevee' },
      { name: 'vaporeon' },
      { name: 'jolteon' },
      { name: 'flareon' },
      { name: 'espeon' },
      { name: 'umbreon' },
      { name: 'horsea' },
      { name: 'seadra' },
      { name: 'kingdra' },
      { name: 'gligar' },
      { name: 'delibird' },
      { name: 'swinub' },
      { name: 'piloswine' },
      { name: 'teddiursa' },
      { name: 'ursaring' },
      { name: 'phanpy' },
      { name: 'donphan' },
      { name: 'mantine' },
      { name: 'skarmory' },
      { name: 'doduo' },
      { name: 'dodrio' },
      { name: 'ponyta' },
      { name: 'rapidash' },
      { name: 'cubone' },
      { name: 'marowak' },
      { name: 'kangaskhan' },
      { name: 'rhyhorn' },
      { name: 'rhydon' },
      { name: 'murkrow' },
      { name: 'houndour' },
      { name: 'houndoom' },
      { name: 'slugma' },
      { name: 'magcargo' },
      { name: 'sneasel' },
      { name: 'misdreavus' },
      { name: 'porygon' },
      { name: 'porygon2' },
      { name: 'chansey' },
      { name: 'blissey' },
      { name: 'lapras' },
      { name: 'omanyte' },
      { name: 'omastar' },
      { name: 'kabuto' },
      { name: 'kabutops' },
      { name: 'aerodactyl' },
      { name: 'snorlax' },
      { name: 'bulbasaur' },
      { name: 'ivysaur' },
      { name: 'venusaur' },
      { name: 'charmander' },
      { name: 'charmeleon' },
      { name: 'charizard' },
      { name: 'squirtle' },
      { name: 'wartortle' },
      { name: 'blastoise' },
      { name: 'articuno' },
      { name: 'zapdos' },
      { name: 'moltres' },
      { name: 'raikou' },
      { name: 'entei' },
      { name: 'suicune' },
      { name: 'dratini' },
      { name: 'dragonair' },
      { name: 'dragonite' },
      { name: 'larvitar' },
      { name: 'pupitar' },
      { name: 'tyranitar' },
      { name: 'lugia' },
      { name: 'ho-oh' },
      { name: 'mewtwo' },
      { name: 'mew' },
      { name: 'celebi' },
      { name: 'treecko' },
      { name: 'grovyle' },
      { name: 'sceptile' },
      { name: 'torchic' },
      { name: 'combusken' },
      { name: 'blaziken' },
      { name: 'mudkip' },
      { name: 'marshtomp' },
      { name: 'swampert' },
      { name: 'poochyena' },
      { name: 'mightyena' },
      { name: 'zigzagoon' },
      { name: 'linoone' },
      { name: 'wurmple' },
      { name: 'silcoon' },
      { name: 'beautifly' },
      { name: 'cascoon' },
      { name: 'dustox' },
      { name: 'lotad' },
      { name: 'lombre' },
      { name: 'ludicolo' },
      { name: 'seedot' },
      { name: 'nuzleaf' },
      { name: 'shiftry' },
      { name: 'taillow' },
      { name: 'swellow' },
      { name: 'wingull' },
      { name: 'pelipper' },
      { name: 'ralts' },
      { name: 'kirlia' },
      { name: 'gardevoir' },
      { name: 'surskit' },
      { name: 'masquerain' },
      { name: 'shroomish' },
      { name: 'breloom' },
      { name: 'slakoth' },
      { name: 'vigoroth' },
      { name: 'slaking' },
      { name: 'abra' },
      { name: 'kadabra' },
      { name: 'alakazam' },
      { name: 'nincada' },
      { name: 'ninjask' },
      { name: 'shedinja' },
      { name: 'whismur' },
      { name: 'loudred' },
      { name: 'exploud' },
      { name: 'makuhita' },
      { name: 'hariyama' },
      { name: 'goldeen' },
      { name: 'seaking' },
      { name: 'magikarp' },
      { name: 'gyarados' },
      { name: 'azurill' },
      { name: 'marill' },
      { name: 'azumarill' },
      { name: 'geodude' },
      { name: 'graveler' },
      { name: 'golem' },
      { name: 'nosepass' },
      { name: 'skitty' },
      { name: 'delcatty' },
      { name: 'zubat' },
      { name: 'golbat' },
      { name: 'crobat' },
      { name: 'tentacool' },
      { name: 'tentacruel' },
      { name: 'sableye' },
      { name: 'mawile' },
      { name: 'aron' },
      { name: 'lairon' },
      { name: 'aggron' },
      { name: 'machop' },
      { name: 'machoke' },
      { name: 'machamp' },
      { name: 'meditite' },
      { name: 'medicham' },
      { name: 'electrike' },
      { name: 'manectric' },
      { name: 'plusle' },
      { name: 'minun' },
      { name: 'magnemite' },
      { name: 'magneton' },
      { name: 'voltorb' },
      { name: 'electrode' },
      { name: 'volbeat' },
      { name: 'illumise' },
      { name: 'oddish' },
      { name: 'gloom' },
      { name: 'vileplume' },
      { name: 'bellossom' },
      { name: 'doduo' },
      { name: 'dodrio' },
      { name: 'roselia' },
      { name: 'gulpin' },
      { name: 'swalot' },
      { name: 'carvanha' },
      { name: 'sharpedo' },
      { name: 'wailmer' },
      { name: 'wailord' },
      { name: 'numel' },
      { name: 'camerupt' },
      { name: 'slugma' },
      { name: 'magcargo' },
      { name: 'torkoal' },
      { name: 'grimer' },
      { name: 'muk' },
      { name: 'koffing' },
      { name: 'weezing' },
      { name: 'spoink' },
      { name: 'grumpig' },
      { name: 'sandshrew' },
      { name: 'sandslash' },
      { name: 'spinda' },
      { name: 'skarmory' },
      { name: 'trapinch' },
      { name: 'vibrava' },
      { name: 'flygon' },
      { name: 'cacnea' },
      { name: 'cacturne' },
      { name: 'swablu' },
      { name: 'altaria' },
      { name: 'zangoose' },
      { name: 'seviper' },
      { name: 'lunatone' },
      { name: 'solrock' },
      { name: 'barboach' },
      { name: 'whiscash' },
      { name: 'corphish' },
      { name: 'crawdaunt' },
      { name: 'baltoy' },
      { name: 'claydol' },
      { name: 'lileep' },
      { name: 'cradily' },
      { name: 'anorith' },
      { name: 'armaldo' },
      { name: 'igglybuff' },
      { name: 'jigglypuff' },
      { name: 'wigglytuff' },
      { name: 'feebas' },
      { name: 'milotic' },
      { name: 'castform' },
      { name: 'staryu' },
      { name: 'starmie' },
      { name: 'kecleon' },
      { name: 'shuppet' },
      { name: 'banette' },
      { name: 'duskull' },
      { name: 'dusclops' },
      { name: 'tropius' },
      { name: 'chimecho' },
      { name: 'absol' },
      { name: 'vulpix' },
      { name: 'ninetales' },
      { name: 'pichu' },
      { name: 'pikachu' },
      { name: 'raichu' },
      { name: 'psyduck' },
      { name: 'golduck' },
      { name: 'wynaut' },
      { name: 'wobbuffet' },
      { name: 'natu' },
      { name: 'xatu' },
      { name: 'girafarig' },
      { name: 'phanpy' },
      { name: 'donphan' },
      { name: 'pinsir' },
      { name: 'heracross' },
      { name: 'rhyhorn' },
      { name: 'rhydon' },
      { name: 'snorunt' },
      { name: 'glalie' },
      { name: 'spheal' },
      { name: 'sealeo' },
      { name: 'walrein' },
      { name: 'clamperl' },
      { name: 'huntail' },
      { name: 'gorebyss' },
      { name: 'relicanth' },
      { name: 'corsola' },
      { name: 'chinchou' },
      { name: 'lanturn' },
      { name: 'luvdisc' },
      { name: 'horsea' },
      { name: 'seadra' },
      { name: 'kingdra' },
      { name: 'bagon' },
      { name: 'shelgon' },
      { name: 'salamence' },
      { name: 'beldum' },
      { name: 'metang' },
      { name: 'metagross' },
      { name: 'regirock' },
      { name: 'regice' },
      { name: 'registeel' },
      { name: 'latias' },
      { name: 'latios' },
      { name: 'kyogre' },
      { name: 'groudon' },
      { name: 'rayquaza' },
      { name: 'jirachi' },
      { name: 'deoxys' },
      { name: 'bulbasaur' },
      { name: 'ivysaur' },
      { name: 'venusaur' },
      { name: 'charmander' },
      { name: 'charmeleon' },
      { name: 'charizard' },
      { name: 'squirtle' },
      { name: 'wartortle' },
      { name: 'blastoise' },
      { name: 'caterpie' },
      { name: 'metapod' },
      { name: 'butterfree' },
      { name: 'weedle' },
      { name: 'kakuna' },
      { name: 'beedrill' },
      { name: 'pidgey' },
      { name: 'pidgeotto' },
      { name: 'pidgeot' },
      { name: 'rattata' },
      { name: 'raticate' },
      { name: 'spearow' },
      { name: 'fearow' },
      { name: 'ekans' },
      { name: 'arbok' },
      { name: 'pikachu' },
      { name: 'raichu' },
      { name: 'sandshrew' },
      { name: 'sandslash' },
      { name: 'nidoran-f' },
      { name: 'nidorina' },
      { name: 'nidoqueen' },
      { name: 'nidoran-m' },
      { name: 'nidorino' },
      { name: 'nidoking' },
      { name: 'clefairy' },
      { name: 'clefable' },
      { name: 'vulpix' },
      { name: 'ninetales' },
      { name: 'jigglypuff' },
      { name: 'wigglytuff' },
      { name: 'zubat' },
      { name: 'golbat' },
      { name: 'oddish' },
      { name: 'gloom' },
      { name: 'vileplume' },
      { name: 'paras' },
      { name: 'parasect' },
      { name: 'venonat' },
      { name: 'venomoth' },
      { name: 'diglett' },
      { name: 'dugtrio' },
      { name: 'meowth' },
      { name: 'persian' },
      { name: 'psyduck' },
      { name: 'golduck' },
      { name: 'mankey' },
      { name: 'primeape' },
      { name: 'growlithe' },
      { name: 'arcanine' },
      { name: 'poliwag' },
      { name: 'poliwhirl' },
      { name: 'poliwrath' },
      { name: 'abra' },
      { name: 'kadabra' },
      { name: 'alakazam' },
      { name: 'machop' },
      { name: 'machoke' },
      { name: 'machamp' },
      { name: 'bellsprout' },
      { name: 'weepinbell' },
      { name: 'victreebel' },
      { name: 'tentacool' },
      { name: 'tentacruel' },
      { name: 'geodude' },
      { name: 'graveler' },
      { name: 'golem' },
      { name: 'ponyta' },
      { name: 'rapidash' },
      { name: 'slowpoke' },
      { name: 'slowbro' },
      { name: 'magnemite' },
      { name: 'magneton' },
      { name: 'farfetchd' },
      { name: 'doduo' },
      { name: 'dodrio' },
      { name: 'seel' },
      { name: 'dewgong' },
      { name: 'grimer' },
      { name: 'muk' },
      { name: 'shellder' },
      { name: 'cloyster' },
      { name: 'gastly' },
      { name: 'haunter' },
      { name: 'gengar' },
      { name: 'onix' },
      { name: 'drowzee' },
      { name: 'hypno' },
      { name: 'krabby' },
      { name: 'kingler' },
      { name: 'voltorb' },
      { name: 'electrode' },
      { name: 'exeggcute' },
      { name: 'exeggutor' },
      { name: 'cubone' },
      { name: 'marowak' },
      { name: 'hitmonlee' },
      { name: 'hitmonchan' },
      { name: 'lickitung' },
      { name: 'koffing' },
      { name: 'weezing' },
      { name: 'rhyhorn' },
      { name: 'rhydon' },
      { name: 'chansey' },
      { name: 'tangela' },
      { name: 'kangaskhan' },
      { name: 'horsea' },
      { name: 'seadra' },
      { name: 'goldeen' },
      { name: 'seaking' },
      { name: 'staryu' },
      { name: 'starmie' },
      { name: 'mr-mime' },
      { name: 'scyther' },
      { name: 'jynx' },
      { name: 'electabuzz' },
      { name: 'magmar' },
      { name: 'pinsir' },
      { name: 'tauros' },
      { name: 'magikarp' },
      { name: 'gyarados' },
      { name: 'lapras' },
      { name: 'ditto' },
      { name: 'eevee' },
      { name: 'vaporeon' },
      { name: 'jolteon' },
      { name: 'flareon' },
      { name: 'porygon' },
      { name: 'omanyte' },
      { name: 'omastar' },
      { name: 'kabuto' },
      { name: 'kabutops' },
      { name: 'aerodactyl' },
      { name: 'snorlax' },
      { name: 'articuno' },
      { name: 'zapdos' },
      { name: 'moltres' },
      { name: 'dratini' },
      { name: 'dragonair' },
      { name: 'dragonite' },
      { name: 'mewtwo' },
      { name: 'mew' }
      
      // Añade aquí todos los nombres de Pokémon que desees prerender
    ]
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];