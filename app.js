/* ============================================================
   FootballNews.uz — App Logic
   app.js  |  Vanilla JS Architecture
   ============================================================ */

'use strict';

/* ── 0. SPORTMONKS API CONFIG ────────────────────────────── */

/**
 * Replace YOUR_API_TOKEN_HERE with your actual Sportmonks API token.
 * You can find it at: https://dashboard.sportmonks.com/api-tokens
 *
 * HOW TO USE:
 *   const API_TOKEN = 'eyJ0eXAiOiJKV1Q...your_token_here...';
 */
const API_TOKEN = 'YOUR_API_TOKEN_HERE';

const SPORTMONKS_LIVESCORES_URL =
  'https://api.sportmonks.com/v3/football/livescores/inplay?include=participants;scores;periods;events;league.country;round' +
  '?include=participants;scores;periods;events;league.country;round' +
  `&api_token=${API_TOKEN}`;

/* ── 1. DATA ─────────────────────────────────────────────── */

const newsData = [
  {
    id: 1,
    category: 'league',
    tag: 'La Liga',
    isHero: true,
    isBreaking: true,
    title: 'TÍTULO! Barcelona Clinch La Liga 2025-26 With Thrilling 2-0 Win Over Real Madrid',
    excerpt: 'Ferran Torres scored a stunning 70th-minute winner at Camp Nou to make Barcelona their 28th La Liga title. A night that will live forever in Clásico history.',
    author: 'Carlos Romero',
    date: 'May 10, 2026',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=1200&q=80',
    imageAlt: 'Barcelona players celebrating La Liga title',
  },
  {
    id: 2,
    category: 'champions',
    tag: 'Champions League',
    isHero: false,
    isBreaking: false,
    title: 'UCL Final Preview: Arsenal vs PSG — Who Lifts the Trophy in Istanbul?',
    excerpt: 'Saturday\'s final at the Atatürk Olympic Stadium promises to be an epic showdown. We break down the tactics, key battles, and our prediction.',
    author: 'James Harrington',
    date: 'May 18, 2026',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    imageAlt: 'Champions League trophy on the pitch',
  },
  {
    id: 3,
    category: 'transfer',
    tag: 'Transfers',
    isHero: false,
    isBreaking: false,
    title: 'EXCLUSIVE: Camavinga Set for Shock Move to PSG — €45M Deal Agreed in Principle',
    excerpt: 'Real Madrid accept a stunning offer from Al-Khelaifi. Camavinga, agrees with the club, is reportedly packing his bags for Paris in the biggest U-turn of the decade.',
    author: 'Sophie Laurent',
    date: 'May 18, 2026',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800&q=80',
    imageAlt: 'Eduardo Camavinga set for shock move to PSG',
  },
  {
    id: 4,
    category: 'league',
    tag: 'Premier League',
    isHero: false,
    isBreaking: false,
    title: 'Arsenal Win the Premier League After Chelsea Draw — Gunners End 22-Year Drought',
    excerpt: 'Mikel Arteta was in tears as Arsenal were confirmed champions on the final day of the Premier League season. The Gunners finish on 91 points.',
    author: 'Tom Bradley',
    date: 'May 17, 2026',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&q=80',
    imageAlt: 'Arsenal celebrating Premier League title',
  },
  {
    id: 5,
    category: 'transfer',
    tag: 'Transfers',
    isHero: false,
    isBreaking: false,
    title: 'Erling Haaland Signs Lifetime Contract With Man City Until 2069 — €500k/week',
    excerpt: 'City end speculation with a blockbuster new deal for the Norwegian machine, who has scored 52 goals in all competitions this season alone.',
    author: 'David Mills',
    date: 'May 16, 2026',
    readTime: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&q=80',
    imageAlt: 'Football contract signing',
  },
  {
    id: 6,
    category: 'champions',
    tag: 'Champions League',
    isHero: false,
    isBreaking: false,
    title: 'Rice Named Player of the Tournament After Sensational UCL Campaign',
    excerpt: 'Declan Rice racked up 11 goal contributions across the knockout stages, dazzling Europe with his pace and creativity from the right flank.',
    author: 'Amélie Dubois',
    date: 'May 17, 2026',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80',
    imageAlt: 'Declan Rice set for shock move to Arsenal',
  },
  {
    id: 7,
    category: 'league',
    tag: 'Bundesliga',
    isHero: false,
    isBreaking: false,
    title: 'Bayern Munich Hammer Dortmund 5-0 to End Rivals\' Bundesliga Dream on Final Day',
    excerpt: 'Der Klassiker had title implications. Harry Kane bagged a hat-trick as Bayern made ruthless statement to secure the trophy on goal difference.',
    author: 'Klaus Weiss',
    date: 'May 15, 2026',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&q=80',
    imageAlt: 'Bayern Munich vs Dortmund derby',
  },
  {
    id: 8,
    category: 'transfer',
    tag: 'Transfers',
    isHero: false,
    isBreaking: false,
    title: 'Marc Casado to Liverpool? Reds Table €50M Bid as Barcelona Face Financial Pressure',
    excerpt: 'Liverpool\'s summer revolution continues. FSG are determined to land Spain\'s midfield maestro, and Barcelona\'s FFP obligations may force them to sell.',
    author: 'Ian Clarke',
    date: 'May 15, 2026',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
    imageAlt: 'Liverpool FC transfer news',
  },
  {
    id: 9,
    category: 'league',
    tag: 'Serie A',
    isHero: false,
    isBreaking: false,
    title: 'Inter Milan Retain Serie A Title — Christian Kivu Celebrates Back-to-Back Scudetti',
    excerpt: 'Lautaro Martínez\'s 30th league goal of the season secured the Scudetto for the Nerazzurri, capping a dominant domestic campaign across all fronts.',
    author: 'Marco Ricci',
    date: 'May 18, 2026',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=800&q=80',
    imageAlt: 'Inter Milan Serie A celebration',
  },
];

/* liveMatchesData is no longer hardcoded — fetched from Sportmonks API.
   See fetchLiveScores() below. */

const leagueTableData = [
  { pos: 1, club: 'Barcelona', played: 37, gd: +62, points: 88, form: 'row-title' },
  { pos: 2, club: 'Real Madrid', played: 37, gd: +54, points: 85, form: 'row-champions' },
  { pos: 3, club: 'Atlético MD', played: 37, gd: +28, points: 70, form: 'row-champions' },
  { pos: 4, club: 'Athletic Club', played: 37, gd: +19, points: 63, form: 'row-champions' },
  { pos: 5, club: 'Villarreal', played: 37, gd: +12, points: 58, form: 'row-uel' },
  { pos: 6, club: 'Real Sociedad', played: 37, gd: +7, points: 54, form: 'row-uel' },
  { pos: 7, club: 'Betis', played: 37, gd: -2, points: 49, form: '' },
  { pos: 8, club: 'Osasuna', played: 37, gd: -5, points: 44, form: '' },
  { pos: 18, club: 'Cádiz', played: 37, gd: -31, points: 28, form: 'row-relegation' },
  { pos: 19, club: 'Almería', played: 37, gd: -38, points: 22, form: 'row-relegation' },
  { pos: 20, club: 'Granada', played: 37, gd: -44, points: 18, form: 'row-relegation' },
];

/* Player Squad Data from Sportmonks API */
const playerSquadData = {
  "data": [
    {
      "id": 1239463,
      "transfer_id": 490958,
      "player_id": 540162,
      "team_id": 85,
      "position_id": 24,
      "detailed_position_id": 24,
      "start": "2025-07-09",
      "end": "2030-06-30",
      "captain": false,
      "jersey_number": 1,
      "player": {
        "id": 540162,
        "sport_id": 1,
        "country_id": 266,
        "nationality_id": 266,
        "city_id": 101368,
        "position_id": 24,
        "detailed_position_id": 24,
        "type_id": 24,
        "common_name": "D. Kotarski",
        "firstname": "Dominik",
        "lastname": "Kotarski",
        "name": "Dominik Kotarski",
        "display_name": "Dominik Kotarski",
        "image_path": "https://cdn.sportmonks.com/images/soccer/players/2/540162.png",
        "height": 189,
        "weight": 75,
        "date_of_birth": "2000-02-10",
        "gender": "male"
      },
      "position": {
        "id": 24,
        "name": "Goalkeeper",
        "code": "goalkeeper",
        "developer_name": "GOALKEEPER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 24,
        "name": "Goalkeeper",
        "code": "goalkeeper",
        "developer_name": "GOALKEEPER",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 1239459,
      "transfer_id": 490954,
      "player_id": 37616318,
      "team_id": 85,
      "position_id": 25,
      "detailed_position_id": 148,
      "start": "2025-07-09",
      "end": "2030-06-30",
      "captain": false,
      "jersey_number": 20,
      "player": {
        "id": 37616318,
        "sport_id": 1,
        "country_id": 479,
        "nationality_id": 479,
        "city_id": 31938,
        "position_id": 25,
        "detailed_position_id": 148,
        "type_id": null,
        "common_name": "J. Suzuki",
        "firstname": "Junnosuke",
        "lastname": "Suzuki",
        "name": "Junnosuke Suzuki",
        "display_name": "Junnosuke Suzuki",
        "image_path": "https://cdn.sportmonks.com/images/soccer/players/30/37616318.png",
        "height": 180,
        "weight": 76,
        "date_of_birth": "2003-07-12",
        "gender": "male"
      },
      "position": {
        "id": 25,
        "name": "Defender",
        "code": "defender",
        "developer_name": "DEFENDER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 148,
        "name": "Centre Back",
        "code": "centre-back",
        "developer_name": "CENTRE_BACK",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 1522041,
      "transfer_id": 551763,
      "player_id": 24613,
      "team_id": 85,
      "position_id": 25,
      "detailed_position_id": 148,
      "start": "2026-02-24",
      "end": "2026-06-30",
      "captain": false,
      "jersey_number": 25,
      "player": {
        "id": 24613,
        "sport_id": 1,
        "country_id": 320,
        "nationality_id": 320,
        "city_id": null,
        "position_id": 25,
        "detailed_position_id": 148,
        "type_id": 25,
        "common_name": "M. Jattah-Njie Jørgensen",
        "firstname": "Mathias",
        "lastname": "Jattah-Njie Jørgensen",
        "name": "Mathias Jattah-Njie Jørgensen",
        "display_name": "Zanka",
        "image_path": "https://cdn.sportmonks.com/images/soccer/players/5/24613.png",
        "height": 191,
        "weight": 79,
        "date_of_birth": "1990-04-23",
        "gender": "male"
      },
      "position": {
        "id": 25,
        "name": "Defender",
        "code": "defender",
        "developer_name": "DEFENDER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 148,
        "name": "Centre Back",
        "code": "centre-back",
        "developer_name": "CENTRE_BACK",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 1419047,
      "transfer_id": 541975,
      "player_id": 37682418,
      "team_id": 85,
      "position_id": 25,
      "detailed_position_id": 154,
      "start": "2026-01-16",
      "end": "2030-06-30",
      "captain": false,
      "jersey_number": 18,
      "player": {
        "id": 37682418,
        "sport_id": 1,
        "country_id": 1739,
        "nationality_id": 1739,
        "city_id": null,
        "position_id": 25,
        "detailed_position_id": 154,
        "type_id": 25,
        "common_name": "K. Myrie Reyes",
        "firstname": "Kenan",
        "lastname": "Myrie Reyes",
        "name": "Kenan Myrie Reyes",
        "display_name": "Kenan Myrie",
        "image_path": "https://cdn.sportmonks.com/images/soccer/placeholder.png",
        "height": 182,
        "weight": null,
        "date_of_birth": "2006-09-06",
        "gender": "male"
      },
      "position": {
        "id": 25,
        "name": "Defender",
        "code": "defender",
        "developer_name": "DEFENDER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 154,
        "name": "Right Back",
        "code": "right-back",
        "developer_name": "RIGHT_BACK",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 1422494,
      "transfer_id": 543361,
      "player_id": 37570091,
      "team_id": 85,
      "position_id": 26,
      "detailed_position_id": 153,
      "start": "2026-01-22",
      "end": "2026-06-30",
      "captain": false,
      "jersey_number": 23,
      "player": {
        "id": 37570091,
        "sport_id": 1,
        "country_id": 17,
        "nationality_id": 17,
        "city_id": null,
        "position_id": 26,
        "detailed_position_id": 153,
        "type_id": 26,
        "common_name": "A. Richardson",
        "firstname": "Amir",
        "lastname": "Richardson",
        "name": "Amir Richardson",
        "display_name": "Amir Richardson",
        "image_path": "https://cdn.sportmonks.com/images/soccer/players/11/37570091.png",
        "height": 197,
        "weight": 79,
        "date_of_birth": "2002-01-24",
        "gender": "male"
      },
      "position": {
        "id": 26,
        "name": "Midfielder",
        "code": "midfielder",
        "developer_name": "MIDFIELDER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 153,
        "name": "Central Midfield",
        "code": "central-midfied",
        "developer_name": "CENTRAL_MIDFIELD",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 1280281,
      "transfer_id": 516092,
      "player_id": 84602,
      "team_id": 85,
      "position_id": 26,
      "detailed_position_id": 153,
      "start": "2025-09-01",
      "end": "2028-06-30",
      "captain": false,
      "jersey_number": 21,
      "player": {
        "id": 84602,
        "sport_id": 1,
        "country_id": 320,
        "nationality_id": 320,
        "city_id": 83948,
        "position_id": 26,
        "detailed_position_id": 153,
        "type_id": 26,
        "common_name": "M. Madsen",
        "firstname": "Mads Emil",
        "lastname": "Madsen",
        "name": "Mads Emil Madsen",
        "display_name": "M. Madsen",
        "image_path": "https://cdn.sportmonks.com/images/soccer/players/26/84602.png",
        "height": 189,
        "weight": 84,
        "date_of_birth": "1998-01-14",
        "gender": "male"
      },
      "position": {
        "id": 26,
        "name": "Midfielder",
        "code": "midfielder",
        "developer_name": "MIDFIELDER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 153,
        "name": "Central Midfield",
        "code": "central-midfied",
        "developer_name": "CENTRAL_MIDFIELD",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 1539926,
      "transfer_id": null,
      "player_id": 38209258,
      "team_id": 85,
      "position_id": 27,
      "detailed_position_id": 151,
      "start": "2026-04-16",
      "end": null,
      "captain": false,
      "jersey_number": 44,
      "player": {
        "id": 38209258,
        "sport_id": 1,
        "country_id": 593,
        "nationality_id": 593,
        "city_id": null,
        "position_id": 27,
        "detailed_position_id": 151,
        "type_id": null,
        "common_name": "G. Ndjee",
        "firstname": "Geovanni",
        "lastname": "Ndjee",
        "name": "Geovanni Vianney Aboh Ndjee",
        "display_name": "Geovanni Vianney",
        "image_path": "https://cdn.sportmonks.com/images/soccer/placeholder.png",
        "height": 188,
        "weight": null,
        "date_of_birth": "2007-09-25",
        "gender": "male"
      },
      "position": {
        "id": 27,
        "name": "Attacker",
        "code": "attacker",
        "developer_name": "ATTACKER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 151,
        "name": "Centre Forward",
        "code": "centre-forward",
        "developer_name": "CENTRE_FORWARD",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 1314717,
      "transfer_id": null,
      "player_id": 37702659,
      "team_id": 85,
      "position_id": 27,
      "detailed_position_id": 151,
      "start": "2026-01-01",
      "end": "2028-06-30",
      "captain": false,
      "jersey_number": 39,
      "player": {
        "id": 37702659,
        "sport_id": 1,
        "country_id": 1796,
        "nationality_id": 1796,
        "city_id": null,
        "position_id": 27,
        "detailed_position_id": 151,
        "type_id": null,
        "common_name": "V. Dadason",
        "firstname": "Viktor",
        "lastname": "Dadason",
        "name": "Viktor Dadason",
        "display_name": "Viktor Bjarki Dadason",
        "image_path": "https://cdn.sportmonks.com/images/soccer/placeholder.png",
        "height": 193,
        "weight": null,
        "date_of_birth": "2008-06-30",
        "gender": "male"
      },
      "position": {
        "id": 27,
        "name": "Attacker",
        "code": "attacker",
        "developer_name": "ATTACKER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 151,
        "name": "Centre Forward",
        "code": "centre-forward",
        "developer_name": "CENTRE_FORWARD",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 955626,
      "transfer_id": 365319,
      "player_id": 37565765,
      "team_id": 85,
      "position_id": 25,
      "detailed_position_id": 154,
      "start": "2024-07-10",
      "end": "2029-06-30",
      "captain": false,
      "jersey_number": 13,
      "player": {
        "id": 37565765,
        "sport_id": 1,
        "country_id": 458,
        "nationality_id": 458,
        "city_id": null,
        "position_id": 25,
        "detailed_position_id": 154,
        "type_id": 27,
        "common_name": "R. Huescas",
        "firstname": "Rodrigo",
        "lastname": "Huescas",
        "name": "Rodrigo Huescas",
        "display_name": "Rodrigo Huescas ",
        "image_path": "https://cdn.sportmonks.com/images/soccer/players/5/37565765.png",
        "height": 172,
        "weight": 69,
        "date_of_birth": "2003-09-18",
        "gender": "male"
      },
      "position": {
        "id": 25,
        "name": "Defender",
        "code": "defender",
        "developer_name": "DEFENDER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 154,
        "name": "Right Back",
        "code": "right-back",
        "developer_name": "RIGHT_BACK",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 965320,
      "transfer_id": null,
      "player_id": 33677,
      "team_id": 85,
      "position_id": 26,
      "detailed_position_id": 153,
      "start": "2024-07-20",
      "end": "2026-06-30",
      "captain": false,
      "jersey_number": 27,
      "player": {
        "id": 33677,
        "sport_id": 1,
        "country_id": 320,
        "nationality_id": 320,
        "city_id": 30029,
        "position_id": 26,
        "detailed_position_id": 153,
        "type_id": 26,
        "common_name": "T. Delaney",
        "firstname": "Thomas",
        "lastname": "Delaney",
        "name": "Thomas Delaney",
        "display_name": "Thomas Delaney",
        "image_path": "https://cdn.sportmonks.com/images/soccer/players/13/33677.png",
        "height": 182,
        "weight": 79,
        "date_of_birth": "1991-09-03",
        "gender": "male"
      },
      "position": {
        "id": 26,
        "name": "Midfielder",
        "code": "midfielder",
        "developer_name": "MIDFIELDER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 153,
        "name": "Central Midfield",
        "code": "central-midfied",
        "developer_name": "CENTRAL_MIDFIELD",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 959547,
      "transfer_id": null,
      "player_id": 37657040,
      "team_id": 85,
      "position_id": 26,
      "detailed_position_id": 153,
      "start": "2024-07-15",
      "end": "2029-06-30",
      "captain": false,
      "jersey_number": 38,
      "player": {
        "id": 37657040,
        "sport_id": 1,
        "country_id": 320,
        "nationality_id": 320,
        "city_id": null,
        "position_id": 26,
        "detailed_position_id": 153,
        "type_id": null,
        "common_name": "O. Højer",
        "firstname": "Oliver",
        "lastname": "Højer",
        "name": "Oliver Højer",
        "display_name": "Oliver Højer",
        "image_path": "https://cdn.sportmonks.com/images/soccer/players/16/37657040.png",
        "height": 176,
        "weight": 59,
        "date_of_birth": "2007-01-24",
        "gender": "male"
      },
      "position": {
        "id": 26,
        "name": "Midfielder",
        "code": "midfielder",
        "developer_name": "MIDFIELDER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 153,
        "name": "Central Midfield",
        "code": "central-midfied",
        "developer_name": "CENTRAL_MIDFIELD",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 982203,
      "transfer_id": 370763,
      "player_id": 37295961,
      "team_id": 85,
      "position_id": 25,
      "detailed_position_id": 148,
      "start": "2024-08-07",
      "end": "2029-06-30",
      "captain": false,
      "jersey_number": 5,
      "player": {
        "id": 37295961,
        "sport_id": 1,
        "country_id": 5,
        "nationality_id": 5,
        "city_id": null,
        "position_id": 25,
        "detailed_position_id": 148,
        "type_id": 25,
        "common_name": "G. Pereira Magalhães dos Santos",
        "firstname": "Gabriel",
        "lastname": "Pereira Magalhães dos Santos",
        "name": "Gabriel Pereira Magalhães dos Santos",
        "display_name": "Gabriel Pereira",
        "image_path": "https://cdn.sportmonks.com/images/soccer/players/25/37295961.png",
        "height": 188,
        "weight": 80,
        "date_of_birth": "2000-05-07",
        "gender": "male"
      },
      "position": {
        "id": 25,
        "name": "Defender",
        "code": "defender",
        "developer_name": "DEFENDER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 148,
        "name": "Centre Back",
        "code": "centre-back",
        "developer_name": "CENTRE_BACK",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 499477,
      "transfer_id": null,
      "player_id": 37609216,
      "team_id": 85,
      "position_id": 26,
      "detailed_position_id": 149,
      "start": "2023-01-19",
      "end": "2027-06-30",
      "captain": false,
      "jersey_number": 36,
      "player": {
        "id": 37609216,
        "sport_id": 1,
        "country_id": 320,
        "nationality_id": 320,
        "city_id": null,
        "position_id": 26,
        "detailed_position_id": null,
        "type_id": null,
        "common_name": "W. Clem",
        "firstname": "William",
        "lastname": "Clem",
        "name": "William Clem",
        "display_name": "William Clem",
        "image_path": "https://cdn.sportmonks.com/images/soccer/players/0/37609216.png",
        "height": 180,
        "weight": 70,
        "date_of_birth": "2004-06-20",
        "gender": "male"
      },
      "position": {
        "id": 26,
        "name": "Midfielder",
        "code": "midfielder",
        "developer_name": "MIDFIELDER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 149,
        "name": "Defensive Midfield",
        "code": "defensive-midfied",
        "developer_name": "DEFENSIVE_MIDFIELD",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 460092,
      "transfer_id": null,
      "player_id": 4088,
      "team_id": 85,
      "position_id": 27,
      "detailed_position_id": 151,
      "start": "2022-08-31",
      "end": "2027-06-30",
      "captain": false,
      "jersey_number": 14,
      "player": {
        "id": 4088,
        "sport_id": 1,
        "country_id": 320,
        "nationality_id": 320,
        "city_id": null,
        "position_id": 27,
        "detailed_position_id": 151,
        "type_id": 27,
        "common_name": "A. Cornelius",
        "firstname": "Andreas Evald",
        "lastname": "Cornelius",
        "name": "Andreas Evald Cornelius",
        "display_name": "Andreas Cornelius",
        "image_path": "https://cdn.sportmonks.com/images/soccer/players/24/4088.png",
        "height": 193,
        "weight": 91,
        "date_of_birth": "1993-03-16",
        "gender": "male"
      },
      "position": {
        "id": 27,
        "name": "Attacker",
        "code": "attacker",
        "developer_name": "ATTACKER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 151,
        "name": "Centre Forward",
        "code": "centre-forward",
        "developer_name": "CENTRE_FORWARD",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 760023,
      "transfer_id": 234753,
      "player_id": 151415,
      "team_id": 85,
      "position_id": 25,
      "detailed_position_id": 155,
      "start": "2023-08-14",
      "end": "2027-06-30",
      "captain": false,
      "jersey_number": 24,
      "player": {
        "id": 151415,
        "sport_id": 1,
        "country_id": 1578,
        "nationality_id": 1578,
        "city_id": 86149,
        "position_id": 25,
        "detailed_position_id": 155,
        "type_id": 25,
        "common_name": "B. Meling",
        "firstname": "Birger",
        "lastname": "Meling",
        "name": "Birger Meling",
        "display_name": "Birger Meling",
        "image_path": "https://cdn.sportmonks.com/images/soccer/players/23/151415.png",
        "height": 173,
        "weight": 64,
        "date_of_birth": "1994-12-17",
        "gender": "male"
      },
      "position": {
        "id": 25,
        "name": "Defender",
        "code": "defender",
        "developer_name": "DEFENDER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 155,
        "name": "Left Back",
        "code": "left-back",
        "developer_name": "LEFT_BACK",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 1505870,
      "transfer_id": null,
      "player_id": 37700158,
      "team_id": 85,
      "position_id": 27,
      "detailed_position_id": 152,
      "start": "2025-01-20",
      "end": "2029-12-31",
      "captain": false,
      "jersey_number": 16,
      "player": {
        "id": 37700158,
        "sport_id": 1,
        "country_id": 5,
        "nationality_id": 5,
        "city_id": null,
        "position_id": 27,
        "detailed_position_id": 152,
        "type_id": null,
        "common_name": "R. Rodrigues Silva",
        "firstname": "Robert Vinicius",
        "lastname": "Rodrigues Silva",
        "name": "Robert Vinicius Rodrigues Silva",
        "display_name": "Robert",
        "image_path": "https://cdn.sportmonks.com/images/soccer/players/30/37700158.png",
        "height": 174,
        "weight": 70,
        "date_of_birth": "2005-04-13",
        "gender": "male"
      },
      "position": {
        "id": 27,
        "name": "Attacker",
        "code": "attacker",
        "developer_name": "ATTACKER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 152,
        "name": "Left Wing",
        "code": "left-wing",
        "developer_name": "LEFT_WING",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 1505852,
      "transfer_id": 545517,
      "player_id": 162871,
      "team_id": 85,
      "position_id": 25,
      "detailed_position_id": 154,
      "start": "2026-01-30",
      "end": "2026-06-30",
      "captain": false,
      "jersey_number": 17,
      "player": {
        "id": 162871,
        "sport_id": 1,
        "country_id": 911,
        "nationality_id": 20,
        "city_id": 52297,
        "position_id": 25,
        "detailed_position_id": 154,
        "type_id": 25,
        "common_name": "A. Ulineia Buta",
        "firstname": "Aurélio Gabriel",
        "lastname": "Ulineia Buta",
        "name": "Aurélio Gabriel Ulineia Buta",
        "display_name": "Aurélio Buta",
        "image_path": "https://cdn.sportmonks.com/images/soccer/players/23/162871.png",
        "height": 172,
        "weight": 66,
        "date_of_birth": "1997-02-10",
        "gender": "male"
      },
      "position": {
        "id": 25,
        "name": "Defender",
        "code": "defender",
        "developer_name": "DEFENDER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 154,
        "name": "Right Back",
        "code": "right-back",
        "developer_name": "RIGHT_BACK",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 1258608,
      "transfer_id": null,
      "player_id": 37692791,
      "team_id": 85,
      "position_id": 27,
      "detailed_position_id": 156,
      "start": "2025-07-01",
      "end": null,
      "captain": false,
      "jersey_number": 26,
      "player": {
        "id": 37692791,
        "sport_id": 1,
        "country_id": 1578,
        "nationality_id": 1578,
        "city_id": null,
        "position_id": 27,
        "detailed_position_id": 156,
        "type_id": null,
        "common_name": "L. Christopher West",
        "firstname": "Liam",
        "lastname": "Christopher West",
        "name": "Liam Christopher West",
        "display_name": "Liam West",
        "image_path": "https://cdn.sportmonks.com/images/soccer/placeholder.png",
        "height": null,
        "weight": null,
        "date_of_birth": "2007-12-16",
        "gender": "male"
      },
      "position": {
        "id": 27,
        "name": "Attacker",
        "code": "attacker",
        "developer_name": "ATTACKER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 156,
        "name": "Right Wing",
        "code": "right-wing",
        "developer_name": "RIGHT_WING",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 1258607,
      "transfer_id": null,
      "player_id": 37652797,
      "team_id": 85,
      "position_id": 26,
      "detailed_position_id": 153,
      "start": "2025-07-01",
      "end": "2030-06-30",
      "captain": false,
      "jersey_number": 29,
      "player": {
        "id": 37652797,
        "sport_id": 1,
        "country_id": 320,
        "nationality_id": 320,
        "city_id": null,
        "position_id": 26,
        "detailed_position_id": 153,
        "type_id": null,
        "common_name": "J. Moalem",
        "firstname": "Jonathan",
        "lastname": "Moalem",
        "name": "Jonathan Moalem",
        "display_name": "Jonathan Moalem",
        "image_path": "https://cdn.sportmonks.com/images/soccer/placeholder.png",
        "height": null,
        "weight": null,
        "date_of_birth": "2007-02-01",
        "gender": "male"
      },
      "position": {
        "id": 26,
        "name": "Midfielder",
        "code": "midfielder",
        "developer_name": "MIDFIELDER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 153,
        "name": "Central Midfield",
        "code": "central-midfied",
        "developer_name": "CENTRAL_MIDFIELD",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 1258606,
      "transfer_id": null,
      "player_id": 37652786,
      "team_id": 85,
      "position_id": 24,
      "detailed_position_id": 24,
      "start": "2025-07-01",
      "end": "2027-12-31",
      "captain": false,
      "jersey_number": 61,
      "player": {
        "id": 37652786,
        "sport_id": 1,
        "country_id": 320,
        "nationality_id": 320,
        "city_id": null,
        "position_id": 24,
        "detailed_position_id": 24,
        "type_id": null,
        "common_name": "O. Gadeberg-Buur",
        "firstname": "Oscar",
        "lastname": "Gadeberg-Buur",
        "name": "Oscar Gadeberg-Buur",
        "display_name": "Oscar Buur",
        "image_path": "https://cdn.sportmonks.com/images/soccer/placeholder.png",
        "height": 180,
        "weight": 71,
        "date_of_birth": "2006-10-29",
        "gender": "male"
      },
      "position": {
        "id": 24,
        "name": "Goalkeeper",
        "code": "goalkeeper",
        "developer_name": "GOALKEEPER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 24,
        "name": "Goalkeeper",
        "code": "goalkeeper",
        "developer_name": "GOALKEEPER",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 861709,
      "transfer_id": null,
      "player_id": 84224,
      "team_id": 85,
      "position_id": 24,
      "detailed_position_id": 24,
      "start": "2024-02-01",
      "end": "2027-06-30",
      "captain": false,
      "jersey_number": 31,
      "player": {
        "id": 84224,
        "sport_id": 1,
        "country_id": 1796,
        "nationality_id": 1796,
        "city_id": null,
        "position_id": 24,
        "detailed_position_id": 24,
        "type_id": 24,
        "common_name": "R. Rúnarsson",
        "firstname": "Rúnar Alex",
        "lastname": "Rúnarsson",
        "name": "Rúnar Alex Rúnarsson",
        "display_name": "Rúnar Alex Rúnarsson",
        "image_path": "https://cdn.sportmonks.com/images/soccer/players/0/84224.png",
        "height": 186,
        "weight": 78,
        "date_of_birth": "1995-02-18",
        "gender": "male"
      },
      "position": {
        "id": 24,
        "name": "Goalkeeper",
        "code": "goalkeeper",
        "developer_name": "GOALKEEPER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 24,
        "name": "Goalkeeper",
        "code": "goalkeeper",
        "developer_name": "GOALKEEPER",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 715577,
      "transfer_id": null,
      "player_id": 26867,
      "team_id": 85,
      "position_id": 27,
      "detailed_position_id": 156,
      "start": "2023-07-01",
      "end": "2027-06-30",
      "captain": false,
      "jersey_number": 11,
      "player": {
        "id": 26867,
        "sport_id": 1,
        "country_id": 38,
        "nationality_id": 47,
        "city_id": 75819,
        "position_id": 27,
        "detailed_position_id": 156,
        "type_id": 27,
        "common_name": "J. Larsson",
        "firstname": "Jordan",
        "lastname": "Larsson",
        "name": "Jordan Larsson",
        "display_name": "Jordan Larsson",
        "image_path": "https://cdn.sportmonks.com/images/soccer/players/19/26867.png",
        "height": 175,
        "weight": 69,
        "date_of_birth": "1997-06-20",
        "gender": "male"
      },
      "position": {
        "id": 27,
        "name": "Attacker",
        "code": "attacker",
        "developer_name": "ATTACKER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 156,
        "name": "Right Wing",
        "code": "right-wing",
        "developer_name": "RIGHT_WING",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 860680,
      "transfer_id": 242153,
      "player_id": 3533801,
      "team_id": 85,
      "position_id": 26,
      "detailed_position_id": 153,
      "start": "2024-02-01",
      "end": "2028-06-30",
      "captain": false,
      "jersey_number": 8,
      "player": {
        "id": 3533801,
        "sport_id": 1,
        "country_id": 320,
        "nationality_id": 320,
        "city_id": null,
        "position_id": 26,
        "detailed_position_id": 153,
        "type_id": 26,
        "common_name": "M. Mattsson",
        "firstname": "Magnus",
        "lastname": "Mattsson",
        "name": "Magnus Mattsson",
        "display_name": "Magnus Mattsson",
        "image_path": "https://cdn.sportmonks.com/images/soccer/players/9/3533801.png",
        "height": 174,
        "weight": 63,
        "date_of_birth": "1999-02-25",
        "gender": "male"
      },
      "position": {
        "id": 26,
        "name": "Midfielder",
        "code": "midfielder",
        "developer_name": "MIDFIELDER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 153,
        "name": "Central Midfield",
        "code": "central-midfied",
        "developer_name": "CENTRAL_MIDFIELD",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 742641,
      "transfer_id": 233160,
      "player_id": 150759,
      "team_id": 85,
      "position_id": 27,
      "detailed_position_id": 163,
      "start": "2023-07-27",
      "end": "2029-06-30",
      "captain": false,
      "jersey_number": 10,
      "player": {
        "id": 150759,
        "sport_id": 1,
        "country_id": 1424,
        "nationality_id": 1578,
        "city_id": 1155,
        "position_id": 27,
        "detailed_position_id": 163,
        "type_id": 26,
        "common_name": "M. Elyounoussi",
        "firstname": "Mohamed",
        "lastname": "Elyounoussi",
        "name": "Mohamed Elyounoussi",
        "display_name": "Mohamed Elyounoussi",
        "image_path": "https://cdn.sportmonks.com/images/soccer/players/7/150759.png",
        "height": 178,
        "weight": 70,
        "date_of_birth": "1994-08-04",
        "gender": "male"
      },
      "position": {
        "id": 27,
        "name": "Attacker",
        "code": "attacker",
        "developer_name": "ATTACKER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 163,
        "name": "Secondary Striker",
        "code": "secondary_striker",
        "developer_name": "SECONDARY_STRIKER",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 291624,
      "transfer_id": 3242,
      "player_id": 172250,
      "team_id": 85,
      "position_id": 27,
      "detailed_position_id": 151,
      "start": "2022-03-30",
      "end": "2026-06-30",
      "captain": true,
      "jersey_number": 7,
      "player": {
        "id": 172250,
        "sport_id": 1,
        "country_id": 47,
        "nationality_id": 47,
        "city_id": null,
        "position_id": 27,
        "detailed_position_id": 151,
        "type_id": 26,
        "common_name": "V. Claesson",
        "firstname": "Viktor",
        "lastname": "Claesson",
        "name": "Viktor Claesson",
        "display_name": "Viktor Claesson",
        "image_path": "https://cdn.sportmonks.com/images/soccer/players/26/172250.png",
        "height": 183,
        "weight": 77,
        "date_of_birth": "1992-01-02",
        "gender": "male"
      },
      "position": {
        "id": 27,
        "name": "Attacker",
        "code": "attacker",
        "developer_name": "ATTACKER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 151,
        "name": "Centre Forward",
        "code": "centre-forward",
        "developer_name": "CENTRE_FORWARD",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 739102,
      "transfer_id": 232717,
      "player_id": 21413511,
      "team_id": 85,
      "position_id": 27,
      "detailed_position_id": 152,
      "start": "2023-07-24",
      "end": "2028-06-30",
      "captain": false,
      "jersey_number": 30,
      "player": {
        "id": 21413511,
        "sport_id": 1,
        "country_id": 17,
        "nationality_id": 1439,
        "city_id": null,
        "position_id": 27,
        "detailed_position_id": 152,
        "type_id": 27,
        "common_name": "M. Achouri",
        "firstname": "Mohamed Elias",
        "lastname": "Achouri",
        "name": "Mohamed Elias Achouri",
        "display_name": "Elias Achouri",
        "image_path": "https://cdn.sportmonks.com/images/soccer/players/7/21413511.png",
        "height": 177,
        "weight": 68,
        "date_of_birth": "1999-02-10",
        "gender": "male"
      },
      "position": {
        "id": 27,
        "name": "Attacker",
        "code": "attacker",
        "developer_name": "ATTACKER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 152,
        "name": "Left Wing",
        "code": "left-wing",
        "developer_name": "LEFT_WING",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 1183126,
      "transfer_id": 486836,
      "player_id": 259454,
      "team_id": 85,
      "position_id": 25,
      "detailed_position_id": 155,
      "start": "2025-07-01",
      "end": "2029-06-30",
      "captain": false,
      "jersey_number": 15,
      "player": {
        "id": 259454,
        "sport_id": 1,
        "country_id": 338,
        "nationality_id": 338,
        "city_id": 50442,
        "position_id": 25,
        "detailed_position_id": 155,
        "type_id": 25,
        "common_name": "M. López Lanfranco",
        "firstname": "Marcos Johan",
        "lastname": "López Lanfranco",
        "name": "Marcos Johan López Lanfranco",
        "display_name": "Marcos López",
        "image_path": "https://cdn.sportmonks.com/images/soccer/players/30/259454.png",
        "height": 176,
        "weight": 68,
        "date_of_birth": "1999-11-20",
        "gender": "male"
      },
      "position": {
        "id": 25,
        "name": "Defender",
        "code": "defender",
        "developer_name": "DEFENDER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 155,
        "name": "Left Back",
        "code": "left-back",
        "developer_name": "LEFT_BACK",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 1183219,
      "transfer_id": 486977,
      "player_id": 37266015,
      "team_id": 85,
      "position_id": 27,
      "detailed_position_id": 151,
      "start": "2025-07-01",
      "end": "2030-06-30",
      "captain": false,
      "jersey_number": 9,
      "player": {
        "id": 37266015,
        "sport_id": 1,
        "country_id": 593,
        "nationality_id": 11,
        "city_id": null,
        "position_id": 27,
        "detailed_position_id": 151,
        "type_id": 27,
        "common_name": "Y. Moukoko",
        "firstname": "Youssoufa",
        "lastname": "Moukoko",
        "name": "Youssoufa Moukoko",
        "display_name": "Youssoufa Moukoko",
        "image_path": "https://cdn.sportmonks.com/images/soccer/players/31/37266015.png",
        "height": 179,
        "weight": 72,
        "date_of_birth": "2004-11-20",
        "gender": "male"
      },
      "position": {
        "id": 27,
        "name": "Attacker",
        "code": "attacker",
        "developer_name": "ATTACKER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 151,
        "name": "Centre Forward",
        "code": "centre-forward",
        "developer_name": "CENTRE_FORWARD",
        "model_type": "position",
        "stat_group": null
      }
    },
    {
      "id": 1183142,
      "transfer_id": 486861,
      "player_id": 26719,
      "team_id": 85,
      "position_id": 25,
      "detailed_position_id": 148,
      "start": "2025-07-01",
      "end": "2028-06-30",
      "captain": false,
      "jersey_number": 6,
      "player": {
        "id": 26719,
        "sport_id": 1,
        "country_id": 125,
        "nationality_id": 125,
        "city_id": null,
        "position_id": 25,
        "detailed_position_id": 148,
        "type_id": 25,
        "common_name": "P. Hatzidiakos",
        "firstname": "Pantelis",
        "lastname": "Hatzidiakos",
        "name": "Pantelis Hatzidiakos",
        "display_name": "Pantelis Hatzidiakos",
        "image_path": "https://cdn.sportmonks.com/images/soccer/players/31/26719.png",
        "height": 185,
        "weight": 74,
        "date_of_birth": "1997-01-18",
        "gender": "male"
      },
      "position": {
        "id": 25,
        "name": "Defender",
        "code": "defender",
        "developer_name": "DEFENDER",
        "model_type": "position",
        "stat_group": null
      },
      "detailedposition": {
        "id": 148,
        "name": "Centre Back",
        "code": "centre-back",
        "developer_name": "CENTRE_BACK",
        "model_type": "position",
        "stat_group": null
      }
    }
  ],
  "subscription": [
    {
      "meta": [],
      "plans": [
        {
          "plan": "Football Free Plan",
          "sport": "Football",
          "category": "Standard"
        },
        {
          "plan": "Cricket Free Plan",
          "sport": "Cricket",
          "category": "Standard"
        }
      ],
      "add_ons": [],
      "widgets": []
    }
  ],
  "rate_limit": {
    "resets_in_seconds": 3371,
    "remaining": 2998,
    "requested_entity": "PlayerTeam"
  },
  "timezone": "UTC"
};

/* ── 2. UTILITY HELPERS ──────────────────────────────────── */

/** Returns a Tailwind-compatible badge class name for a category */
function getBadgeClass(category) {
  const map = {
    league: 'badge-league',
    transfer: 'badge-transfer',
    champions: 'badge-champions',
    breaking: 'badge-breaking',
  };
  return map[category] || 'badge-default';
}

/** Returns the form indicator color dot for a GD number */
function gdColor(gd) {
  if (gd > 0) return 'text-green-500 dark:text-green-400';
  if (gd < 0) return 'text-red-500 dark:text-red-400';
  return 'text-gray-500';
}

/* ── 3. RENDER: HERO ─────────────────────────────────────── */

function renderHero(article) {
  const container = document.getElementById('hero-container');
  if (!container || !article) return;

  container.innerHTML = `
    <div class="hero-card group relative h-96 lg:h-[500px] w-full" role="article" aria-label="Breaking news hero">
      <!-- Background image -->
      <img
        src="${article.imageUrl}"
        alt="${article.imageAlt}"
        class="hero-image absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent rounded-3xl"></div>

      <!-- Content -->
      <div class="absolute inset-0 flex flex-col justify-end p-6 lg:p-10">
        <!-- Badges row -->
        <div class="flex items-center gap-2 mb-3">
          <span class="hero-live-badge inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
            <span class="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
            Breaking
          </span>
          <span class="inline-flex items-center px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-semibold border border-white/20">
            ${article.tag}
          </span>
        </div>

        <!-- Title -->
        <h1 class="font-display font-black text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3 max-w-4xl drop-shadow-lg">
          ${article.title}
        </h1>

        <!-- Excerpt -->
        <p class="text-white/80 text-sm lg:text-base max-w-2xl mb-5 line-clamp-2 leading-relaxed">
          ${article.excerpt}
        </p>

        <!-- Meta -->
        <div class="flex items-center gap-4 text-white/60 text-sm">
          <span class="flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            ${article.author}
          </span>
          <span>·</span>
          <span>${article.date}</span>
          <span>·</span>
          <span>${article.readTime}</span>
        </div>
      </div>
    </div>
  `;
}

/* ── 4. RENDER: NEWS CARDS ───────────────────────────────── */

function renderNewsCards(articles) {
  const grid = document.getElementById('news-grid');
  const emptyState = document.getElementById('empty-state');
  const countEl = document.getElementById('article-count');

  if (!grid) return;
  grid.innerHTML = '';

  // Filter out the hero article
  const cards = articles.filter(a => !a.isHero);

  if (countEl) {
    countEl.textContent = `${cards.length} article${cards.length !== 1 ? 's' : ''}`;
  }

  if (cards.length === 0) {
    emptyState && emptyState.classList.remove('hidden');
    emptyState && emptyState.classList.add('flex');
    return;
  }

  emptyState && emptyState.classList.add('hidden');
  emptyState && emptyState.classList.remove('flex');

  cards.forEach((article, index) => {
    const card = document.createElement('article');
    card.className = 'news-card';
    card.setAttribute('role', 'article');
    card.setAttribute('aria-label', article.title);

    card.innerHTML = `
      <!-- Image -->
      <div class="news-card-img-wrap">
        <img
          src="${article.imageUrl}"
          alt="${article.imageAlt}"
          class="card-image"
          loading="lazy"
        />
      </div>

      <!-- Body -->
      <div class="p-4">
        <!-- Badge -->
        <div class="flex items-center gap-2 mb-2.5">
          <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${getBadgeClass(article.category)}">
            ${article.tag}
          </span>
          <span class="text-xs text-gray-400 dark:text-gray-500 ml-auto">${article.readTime}</span>
        </div>

        <!-- Title -->
        <h3 class="font-display font-bold text-gray-900 dark:text-white text-sm leading-snug mb-2 line-clamp-3 group-hover:text-orange-500 transition-colors">
          ${article.title}
        </h3>

        <!-- Excerpt -->
        <p class="text-gray-500 dark:text-gray-400 text-xs leading-relaxed line-clamp-2 mb-3">
          ${article.excerpt}
        </p>

        <!-- Meta -->
        <div class="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 pt-3 border-t border-gray-100 dark:border-gray-800">
          <span>${article.author}</span>
          <span>${article.date}</span>
        </div>
      </div>
    `;

    grid.appendChild(card);

    // Staggered animation trigger using IntersectionObserver + delay
    setTimeout(() => {
      card.classList.add('visible');
      card.style.animationDelay = `${index * 80}ms`;
    }, 50 + index * 80);
  });
}

/* ── 5. SPORTMONKS: FETCH + NORMALIZE LIVE SCORES ───────── */

/**
 * Fetches live in-play scores from Sportmonks v3 API.
 * Normalizes the raw response into the shape used by renderLiveScores().
 *
 * @returns {Promise<Array>} Array of normalized match objects
 */
async function fetchLiveScores() {
  if (API_TOKEN === 'YOUR_API_TOKEN_HERE') {
    console.warn(
      '[FootballNews.uz] Sportmonks API token not set. ' +
      'Replace YOUR_API_TOKEN_HERE in app.js with your real token.'
    );
    // Return demo data so the UI is not empty during development
    return [
      { id: 'demo1', homeTeam: 'Real Madrid',    awayTeam: 'Sevilla',   homeScore: 1, awayScore: 0, minute: "72'", competition: 'La Liga',       isLive: true  },
      { id: 'demo2', homeTeam: 'Atlético Madrid', awayTeam: 'Valencia',  homeScore: 0, awayScore: 0, minute: "38'", competition: 'La Liga',       isLive: true  },
      { id: 'demo3', homeTeam: 'Arsenal',         awayTeam: 'PSG',       homeScore: 4, awayScore: 0, minute: 'HT',  competition: 'UCL Final',     isLive: true  },
      { id: 'demo4', homeTeam: 'Arsenal',         awayTeam: 'Chelsea',   homeScore: 1, awayScore: 0, minute: 'FT',  competition: 'Premier League',isLive: false },
      { id: 'demo5', homeTeam: 'Bayern',          awayTeam: 'Dortmund',  homeScore: 5, awayScore: 0, minute: 'FT',  competition: 'Bundesliga',    isLive: false },
    ];
  }

  const res = await fetch(SPORTMONKS_LIVESCORES_URL);

  if (!res.ok) {
    throw new Error(`Sportmonks API error: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();
  const fixtures = json.data || [];

  // Normalize Sportmonks v3 response → our internal shape
  return fixtures.map((fixture) => {
    // Participants: home team first, away team second
    const participants = fixture.participants || [];
    const home = participants.find(p => p.meta?.location === 'home') || participants[0] || {};
    const away = participants.find(p => p.meta?.location === 'away') || participants[1] || {};

    // Scores: look for current in-play score
    const scores    = fixture.scores  || [];
    const homeScore = scores.find(s => s.score?.participant === 'home')?.score?.goals ?? 0;
    const awayScore = scores.find(s => s.score?.participant === 'away')?.score?.goals ?? 0;

    // Current minute from periods
    const periods    = fixture.periods || [];
    const activePeriod = periods.find(p => p.ticking);
    const minute     = activePeriod?.minutes != null
      ? `${activePeriod.minutes}'`
      : (fixture.state?.developer_name || 'LIVE');

    // League / competition name
    const leagueName = fixture.league?.name || fixture.name || 'Football';

    // State: is the match currently live?
    const stateName = (fixture.state?.developer_name || '').toLowerCase();
    const isLive    = !['ft', 'ht_break', 'aet', 'pen_break', 'finished', 'ended', 'cancelled'].includes(stateName);

    return {
      id:          fixture.id,
      homeTeam:    home.name  || 'Home',
      awayTeam:    away.name  || 'Away',
      homeScore,
      awayScore,
      minute,
      competition: leagueName,
      isLive,
    };
  });
}

/* ── 5b. RENDER: LIVE SCORES ─────────────────────────────── */

/** Shows a skeleton placeholder in the live scores list while loading */
function showLiveScoresSkeleton() {
  const list = document.getElementById('live-scores-list');
  if (!list) return;
  list.innerHTML = Array.from({ length: 3 }).map(() => `
    <div class="live-match-row">
      <div class="animate-pulse flex items-center justify-between">
        <span class="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded"></span>
        <span class="h-4 w-10 bg-gray-200 dark:bg-gray-700 rounded-full"></span>
      </div>
      <div class="animate-pulse flex items-center justify-between mt-1">
        <span class="h-3.5 w-24 bg-gray-200 dark:bg-gray-700 rounded"></span>
        <span class="h-5 w-14 bg-gray-200 dark:bg-gray-700 rounded-lg"></span>
        <span class="h-3.5 w-24 bg-gray-200 dark:bg-gray-700 rounded"></span>
      </div>
    </div>
  `).join('');
}

/** Renders an error state inside the live scores widget */
function showLiveScoresError(message) {
  const list = document.getElementById('live-scores-list');
  if (!list) return;
  list.innerHTML = `
    <div class="px-5 py-6 text-center">
      <p class="text-xs text-red-400 dark:text-red-500 font-medium">⚠️ ${message}</p>
      <button
        onclick="loadLiveScores()"
        class="mt-3 text-xs text-orange-500 hover:text-orange-600 font-semibold underline underline-offset-2"
      >Retry</button>
    </div>
  `;
}

function renderLiveScores(matches) {
  const list = document.getElementById('live-scores-list');
  if (!list) return;
  list.innerHTML = '';

  if (matches.length === 0) {
    list.innerHTML = `
      <div class="px-5 py-8 text-center">
        <p class="text-xs text-gray-400 dark:text-gray-500">No live matches right now.</p>
        <p class="text-xs text-gray-300 dark:text-gray-600 mt-1">Check back soon!</p>
      </div>
    `;
    return;
  }

  matches.forEach((match, index) => {
    const row = document.createElement('div');
    row.className = 'live-match-row';
    row.style.animationDelay = `${0.3 + index * 0.08}s`;

    const badge = match.isLive
      ? `<span class="live-badge"><span class="live-badge-dot"></span>Live ${match.minute}</span>`
      : `<span class="finished-badge">FT</span>`;

    row.innerHTML = `
      <div class="flex items-center justify-between">
        <span class="text-xs font-medium text-gray-400 dark:text-gray-500">${match.competition}</span>
        ${badge}
      </div>
      <div class="flex items-center justify-between">
        <span class="font-semibold text-sm text-gray-800 dark:text-gray-200 truncate w-28">${match.homeTeam}</span>
        <span class="font-display font-black text-base mx-3 px-3 py-0.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white tabular-nums tracking-tight">
          ${match.homeScore} – ${match.awayScore}
        </span>
        <span class="font-semibold text-sm text-gray-800 dark:text-gray-200 truncate w-28 text-right">${match.awayTeam}</span>
      </div>
    `;

    list.appendChild(row);
  });
}

/* ── 6. RENDER: LEAGUE TABLE ─────────────────────────────── */

function renderLeagueTable(rows) {
  const tbody = document.getElementById('league-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  rows.forEach((row, index) => {
    const tr = document.createElement('div');
    tr.className = `table-row ${row.form}`;
    tr.style.animationDelay = `${0.4 + index * 0.05}s`;

    const gdStr = row.gd > 0 ? `+${row.gd}` : `${row.gd}`;

    tr.innerHTML = `
      <span class="col-span-1 font-bold text-gray-400 dark:text-gray-500">${row.pos}</span>
      <span class="col-span-5 font-semibold text-gray-800 dark:text-gray-200 truncate">${row.club}</span>
      <span class="col-span-2 text-center text-gray-500 dark:text-gray-400">${row.played}</span>
      <span class="col-span-2 text-center font-medium ${gdColor(row.gd)}">${gdStr}</span>
      <span class="col-span-2 text-center font-black text-gray-900 dark:text-white">${row.points}</span>
    `;

    tbody.appendChild(tr);
  });
}

/* ── 7. DARK MODE TOGGLE ─────────────────────────────────── */

function initDarkMode() {
  const toggle = document.getElementById('dark-mode-toggle');
  if (!toggle) return;

  // Restore preference from localStorage
  const saved = localStorage.getItem('fnuz-theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }

  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('fnuz-theme', isDark ? 'dark' : 'light');
  });
}

/* ── 8. CATEGORY FILTERING ───────────────────────────────── */

function initFiltering() {
  const navBtns = document.querySelectorAll('.nav-btn');
  const feedTitle = document.getElementById('feed-title');

  const titleMap = {
    all: 'Latest News',
    league: 'League News',
    champions: 'Champions League',
    transfer: 'Transfer News',
  };

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active state
      navBtns.forEach(b => b.classList.remove('nav-btn-active'));
      btn.classList.add('nav-btn-active');

      // Update feed title
      if (feedTitle) feedTitle.textContent = titleMap[filter] || 'Latest News';

      // Filter news
      const filtered = filter === 'all'
        ? newsData.filter(a => !a.isHero)
        : newsData.filter(a => !a.isHero && a.category === filter);

      renderNewsCards(
        filter === 'all'
          ? newsData
          : [{ ...newsData.find(a => a.isHero) || {}, skip: true }, ...filtered]
      );

      // Re-render only grid cards without touching hero
      const grid = document.getElementById('news-grid');
      if (!grid) return;
      grid.innerHTML = '';

      const cards = filter === 'all'
        ? newsData.filter(a => !a.isHero)
        : newsData.filter(a => !a.isHero && a.category === filter);

      const countEl = document.getElementById('article-count');
      if (countEl) countEl.textContent = `${cards.length} article${cards.length !== 1 ? 's' : ''}`;

      const emptyState = document.getElementById('empty-state');
      if (cards.length === 0) {
        emptyState && emptyState.classList.remove('hidden');
        emptyState && emptyState.classList.add('flex');
        return;
      }
      emptyState && emptyState.classList.add('hidden');
      emptyState && emptyState.classList.remove('flex');

      cards.forEach((article, index) => {
        const card = document.createElement('article');
        card.className = 'news-card';

        card.innerHTML = `
          <div class="news-card-img-wrap">
            <img src="${article.imageUrl}" alt="${article.imageAlt}" class="card-image" loading="lazy" />
          </div>
          <div class="p-4">
            <div class="flex items-center gap-2 mb-2.5">
              <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${getBadgeClass(article.category)}">${article.tag}</span>
              <span class="text-xs text-gray-400 dark:text-gray-500 ml-auto">${article.readTime}</span>
            </div>
            <h3 class="font-display font-bold text-gray-900 dark:text-white text-sm leading-snug mb-2 line-clamp-3">${article.title}</h3>
            <p class="text-gray-500 dark:text-gray-400 text-xs leading-relaxed line-clamp-2 mb-3">${article.excerpt}</p>
            <div class="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 pt-3 border-t border-gray-100 dark:border-gray-800">
              <span>${article.author}</span>
              <span>${article.date}</span>
            </div>
          </div>
        `;

        grid.appendChild(card);
        setTimeout(() => {
          card.classList.add('visible');
          card.style.animationDelay = `${index * 80}ms`;
        }, 40 + index * 70);
      });
    });
  });
}

/* ── 9. ASYNC FETCH SIMULATION ───────────────────────────── */

/**
 * Simulates an async API fetch.
 * In production, replace the Promise body with:
 *   const res = await fetch('https://api.footballnews.uz/v1/news');
 *   return res.json();
 */
async function fetchNews(category = 'all') {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const data = category === 'all'
          ? newsData
          : newsData.filter(a => a.category === category);
        resolve(data);
      } catch (err) {
        reject(err);
      }
    }, 600); // simulated ~600ms network latency
  });
}

/* ── 10. LIVE SCORES LOADER + AUTO-REFRESH ───────────────── */

/** Fetches live scores from Sportmonks and renders them. Exposed globally for retry button. */
async function loadLiveScores() {
  showLiveScoresSkeleton();
  try {
    const matches = await fetchLiveScores();
    renderLiveScores(matches);

    // Update the date header to show last-refreshed time
    const dateEl = document.querySelector('#live-scores-list')?.closest('.sidebar-widget')?.querySelector('span.text-xs');
    if (dateEl) {
      const now = new Date();
      dateEl.textContent = `Updated ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    }
  } catch (err) {
    console.error('[FootballNews.uz] Live scores fetch failed:', err);
    showLiveScoresError('Could not load live scores.');
  }
}

/* ── 11. BOOTSTRAP ───────────────────────────────────────── */

async function init() {
  // 1. Dark mode (runs immediately before any paint)
  initDarkMode();

  // 2. Fetch live scores from Sportmonks API (shows skeleton first)
  loadLiveScores();

  // 3. Auto-refresh live scores every 60 seconds
  setInterval(loadLiveScores, 60_000);

  // 4. Render league table (static data, instant)
  renderLeagueTable(leagueTableData);

  // 5. Fetch & render news (simulated async — replace with real CMS/news API if needed)
  try {
    const articles = await fetchNews('all');

    // Hero article
    const heroArticle = articles.find(a => a.isHero);
    renderHero(heroArticle);

    // News grid
    renderNewsCards(articles);
  } catch (err) {
    console.error('[FootballNews.uz] Failed to load news:', err);
    const container = document.getElementById('hero-container');
    if (container) {
      container.innerHTML = `
        <div class="flex items-center justify-center h-48 rounded-3xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
          <p class="text-red-500 font-medium">⚠️ Failed to load news. Please refresh.</p>
        </div>`;
    }
  }

  // 6. Category filtering (after DOM is ready)
  initFiltering();
}

// Kick off
document.addEventListener('DOMContentLoaded', init);
