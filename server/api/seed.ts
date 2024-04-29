import {animal, group} from "~/drizzle/schema";
import {db} from "~/drizzle/db";
//

const animals: {name: string, animals: {name: string, image: string}[]}[] = [
  {
    name: "NIŽŠÍ STRUNATCI A KRUHOÚSTÍ",
    "animals": [
      {
        "image": "branchiostoma_lanceolatum.jpg",
        "name": "Kopinatec Plžovitý"
      },
      {
        "image": "f9eea7f71904f0b658cbf025c9973e86.jpg",
        "name": "Mihule"
      },
      {
        "image": "sliznatka-detail-1024x559.jpg",
        "name": "Sliznatka Cizopasná"
      }
    ]
  },
  {
    "name": "PARYBY",
    "animals": [
      {
        "image": "49ca3bc4d2df0c45b22e3b813317dbed.jpg",
        "name": "Chiméra"
      },
      {
        "image": "430443.jpg",
        "name": "Různozobec"
      },
      {
        "image": "122294.jpg",
        "name": "Wobegong"
      },
      {
        "image": "270px-Verpleegsterhaai.jpg",
        "name": "Žralok Vouskatý"
      },
      {
        "image": "Similan_Dive_Center_-_great_whale_shark.jpg",
        "name": "Žralok Obrovský (velrybí)"
      },
      {
        "image": "250px-Scyliorhinus_canicula.jpg",
        "name": "Máčka"
      },
      {
        "image": "zralok-belavy-zralok-byci-84x_dsc_4427.jpg",
        "name": "Žralok Bělavý (byčí)"
      },
      {
        "image": "Tiger_shark(2).jpg",
        "name": "Žralok Tygří"
      },
      {
        "image": "Great_hammerhead2.jpg",
        "name": "Kladivoun"
      },
      {
        "image": "safira-858026.jpg",
        "name": "Žralok Skvrnitý"
      },
      {
        "image": "BPXq4.jpg",
        "name": "Liškoun Obecný"
      },
      {
        "image": "8a3ed1fc-7d70-4374-a3e9-a9f2d4f18c1f.jpg",
        "name": "Žralok Veliký"
      },
      {
        "image": "Great_White_Shark_(14914320281).jpg",
        "name": "Žralok Bílý"
      },
      {
        "image": "Kurzflossen-Mako.jpg",
        "name": "Žralok Mako"
      },
      {
        "image": "DTT9522f7_profimedia_0675480666.jpg",
        "name": "Žralok Malohlavý (grónský)"
      },
      {
        "image": "unnamed.jpg",
        "name": "Světloun"
      },
      {
        "image": "unnamed (1).jpg",
        "name": "Ostroun"
      },
      {
        "image": "324568.jpg",
        "name": "Piloun"
      },
      {
        "image": "Torpedo_marmorata2.jpg",
        "name": "Parejnok Elektrický"
      },
      {
        "image": "Raja_clavata_(juv).jpg",
        "name": "Rejnok"
      },
      {
        "image": "Taeniura_lymma2a.jpg",
        "name": "Trnucha"
      },
      {
        "image": "unnamed (2).jpg",
        "name": "Siba"
      },
      {
        "image": "502200140_univ_lsr_lg.jpg",
        "name": "Manta"
      }
    ]
  },
  {
    "name": "RYBY",
    "animals": [
      {
        "image": "1901891.jpg",
        "name": "Latimerie"
      },
      {
        "image": "640px-Australian-Lungfish.jpg",
        "name": "Bahník (dvojdyšní)"
      },
      {
        "image": "bichir-dehelzuv-polypterus-delhezi.jpg",
        "name": "Bichir"
      },
      {
        "image": "Alligator_Gar_10.jpg",
        "name": "Kostlín"
      },
      {
        "image": "4471.jpg",
        "name": "Kaproun"
      },
      {
        "image": "Sturgeon",
        "name": "Jeseter"
      },
      {
        "image": "vyza-velka.jpg",
        "name": "Vyza Velká"
      },
      {
        "image": "american-paddlefish.jpg",
        "name": "Veslonos"
      },
      {
        "image": "dupl_36695_arapaima-gigas_37602 (1).jpg",
        "name": "Arapaima Velká"
      },
      {
        "image": "Osteoglossum_bicirrhosum.jpg",
        "name": "Arowana"
      },
      {
        "image": "rypoun-1-M.jpg",
        "name": "Rypoun"
      },
      {
        "image": "Anguilla_anguilla.jpg",
        "name": "Úhoř Říční"
      },
      {
        "image": "Il_pasto.jpg",
        "name": "Muréna"
      },
      {
        "image": "amur-bily.jpg",
        "name": "Amur Bílý"
      },
      {
        "image": "leuciscus_aspius_bolen_dravy_01.jpg",
        "name": "Bolen Dravý"
      },
      {
        "image": "139931.jpg",
        "name": "Lín Obecný"
      },
      {
        "image": "parma-obecna-1.jpg",
        "name": "Parma Obecná"
      },
      {
        "image": "Abramis_brama_Prague_Vltava_1.jpg",
        "name": "Cejn Velký"
      },
      {
        "image": "60999_0.jpg",
        "name": "Karas Obecný"
      },
      {
        "image": "1591465842_575_kapr_obecny_683853481-jpg_irecept-full.jpg",
        "name": "Kapr Obecný"
      },
      {
        "image": "asian-bighead-carp.jpg",
        "name": "Tolstolobik Obecný"
      },
      {
        "image": "6225c9cbc80e0922770882.jpg",
        "name": "Piskoř Pruhovaný"
      },
      {
        "image": "Gregory_Moine_-_Red_bellied_Piranha_(by).jpg",
        "name": "Piraňa"
      },
      {
        "image": "Wels_Hafen.jpg",
        "name": "Sumec Velký"
      },
      {
        "image": "271px-Bristlenose_Catfish_700.jpg",
        "name": "Krunýřovec"
      },
      {
        "image": "16_01_uhor.jpg",
        "name": "Paúhoř Elektrický"
      },
      {
        "image": "losos.jpg",
        "name": "Losos Obecný"
      },
      {
        "image": "Salmo_trutta_Ozeaneum_Stralsund_HBP_2010-07-02.jpg",
        "name": "Pstruh Potoční"
      },
      {
        "image": "270px-Danube_Salmon_-_Huchen_(Hucho_hucho).jpg",
        "name": "Hlavatka Podunajská"
      },
      {
        "image": "Thymallus_thymallus2_(cropped).jpg",
        "name": "Lipan Podhorní"
      },
      {
        "image": "Salvelinus_fontinalis_Prague_Vltava_1.jjpg",
        "name": "Siven Americký"
      },
      {
        "image": "Coregonus_lavaretus_maraena_1.jpg",
        "name": "Síh Severní"
      },
      {
        "image": "Northern_Pike_at_Umwelt_Garten.jpg",
        "name": "Štika Obecná"
      },
      {
        "image": "download.jpg",
        "name": "Treska Obecná"
      },
      {
        "image": "mnik_jednovousy.jpg",
        "name": "Mník Jednovousý"
      },
      {
        "image": "Monkfish.jpg",
        "name": "Ďas Mořský"
      },
      {
        "image": "images.jpg",
        "name": "Letoun Obecný"
      },
      {
        "image": "Periophtalmus_barbarus_03082014_Aquarium_Canet_en_Roussillon.jpg",
        "name": "Lezec Obojživelný"
      },
      {
        "image": "koljuska.jpg",
        "name": "Koljuška Tříostná"
      },
      {
        "image": "Hippocampus_guttulatus.jpg",
        "name": "Koníček Mořský"
      },
      {
        "image": "Lionfish_in_coral_reef_2004-11-17.jpg",
        "name": "Perutýn Ohnivý"
      },
      {
        "image": "Cottus_gobio_(in_situ).jpg",
        "name": "Vranka Obecná"
      },
      {
        "image": "GiantGrouper018.jpg",
        "name": "Kanic Obrovský"
      },
      {
        "image": "download (1).jpg",
        "name": "Zlak Nachový"
      },
      {
        "image": "Pilot_fish,_India.jpg",
        "name": "Lodivod Mořský"
      },
      {
        "image": "PercheCommune.jpg",
        "name": "Okoun Říční"
      },
      {
        "image": "candat-obecny-371137508_irecept-full.jpg",
        "name": "Candát Obecný"
      },
      {
        "image": "prazma-obecna-couch-kolorovany-drevoryt-1865.jpg",
        "name": "Pražma Obecná"
      },
      {
        "image": "Amphiprion_ocellaris_(Clown_anemonefish)_Nemo.jpg",
        "name": "Klaun Očkatý"
      },
      {
        "image": "Blue_tang_(Paracanthurus_hepatus)_01.jpg",
        "name": "Bodlok Pestrý"
      },
      {
        "image": "Zanclus_cornutus_in_Kona.jpg",
        "name": "Bičonoš"
      },
      {
        "image": "Barracuda_laban.jpg",
        "name": "Soltýn Barakuda"
      },
      {
        "image": "HM_Orange_M_Sarawut.jpg",
        "name": "Bojovnice Pestrá"
      },
      {
        "image": "Scomber_scombrus.jpg",
        "name": "Makrela Obecná"
      },
      {
        "image": "ab1b7b7dfcb382b37c705ca540656e5b.jpg",
        "name": "Tuňák Obecný"
      },
      {
        "image": "ywHJC0.jpg",
        "name": "Mečoun Obecný"
      },
      {
        "image": "Indo-Pacific-sailfish-lateral-view-604x270.jpg",
        "name": "Plachetník Atlantský"
      },
      {
        "image": "Freshwater_angelfish_biodome.jpg",
        "name": "Skalára"
      },
      {
        "image": "300px-Pleuronectes_platessa.jpg",
        "name": "Platýs"
      },
      {
        "image": "640px-Fugu_in_Tank.jpg",
        "name": "Čtverzubec Fugu"
      },
      {
        "image": "Diodon_hystrix.jpg",
        "name": "Ježík Obecný"
      },
      {
        "image": "401869.jpg",
        "name": "Měsíčník Svítivý"
      }
    ]
  },
  {
    "name": "OBOJZIVELNICI",
    "animals": [
      {
        "image": "BEL536679_mlok.jpg",
        "name": "Velemlok"
      },
      {
        "image": "Postojna-cave-proteus-2.jpg",
        "name": "Macarát Jeskynní"
      },
      {
        "image": "Mlok.jpg",
        "name": "Mlok Skvrnitý"
      },
      {
        "image": "Alpensalamander_(2)_bei_Schöllang_im_Allgäu.jpg",
        "name": "Mlok Černý"
      },
      {
        "image": "Triturus_vulgaris.jpg",
        "name": "Čolek Obecný"
      },
      {
        "image": "Triturus_alpestris.jpg",
        "name": "Čolek Horský"
      },
      {
        "image": "Axolotl2.jpg",
        "name": "Axolotl Mexický"
      },
      {
        "image": "unnamed (3).jpg",
        "name": "Axolotl Skvrnitý"
      },
      {
        "image": "depositphotos_455874158-stock-photo-selective-focus-shot-blue-spotted.jpg",
        "name": "Axolotl Modroskvrný"
      },
      {
        "image": "unnamed (4).jpg",
        "name": "Červor Cejlonský"
      },
      {
        "image": "Siphonops_annulatus_IRDias_2014.jpg",
        "name": "Cecílie Kroužkovaná"
      },
      {
        "image": "270px-Bombina_bombina_1_(Marek_Szczepanek).jpg",
        "name": "Kuňka Obecná"
      },
      {
        "image": "BombinaVariegataJuv.jpg",
        "name": "Kuňka Žlutobřichá"
      },
      {
        "image": "AlytesObstet.jpg",
        "name": "Ropuška Starostlivá"
      },
      {
        "image": "Pipa_pipa_juillet_2007_-_1.jpg",
        "name": "Pipa Americká"
      },
      {
        "image": "Gemeiner_Krallenfrosch_-_Xenopus_laevis_-_aus_Afrika_ArM.jpg",
        "name": "Drápatka Vodní"
      },
      {
        "image": "PelobatesFuscus.jpg",
        "name": "Blatnice Skvrnitá"
      },
      {
        "image": "Myobatrachus_gouldii_(lateral_view).jpg",
        "name": "Paropucha Křížová"
      },
      {
        "image": "220px-Argentine_horned_frog_(Ceratophrys_ornata).jpg",
        "name": "Rohatka Ozdobná"
      },
      {
        "image": "Ropucha_obecná_(Bufo_bufo).jpg",
        "name": "Ropucha Obecná"
      },
      {
        "image": "Bufotes_balearicus_female_quadrat.jpg",
        "name": "Ropucha Zelená"
      },
      {
        "image": "Hyla_arborea_(Marek_Szczepanek).jpg",
        "name": "Rosnička Zelená"
      },
      {
        "image": "Rhacophorus_nigropalmatus.jpg",
        "name": "Létavka"
      },
      {
        "image": "Red_eyed_tree_frog_edit2.jpg",
        "name": "Listovnice Červenooká"
      },
      {
        "image": "270px-Dendrobates-azureus",
        "name": "Pralesnička Azurová"
      },
      {
        "image": "Ranitomeya_amazonica.jpg",
        "name": "Pralesnička Síťkovaná"
      },
      {
        "image": "Golden_Poison_dart_frog_Phyllobates_terribilis.jpg",
        "name": "Pralesnička Strašná"
      },
      {
        "image": "Teichfrosch.jpg",
        "name": "Skokan Zelený"
      },
      {
        "image": "European_Common_Frog_Rana_temporaria_(cropped).jpg",
        "name": "Skokan Hnědý"
      },
      {
        "image": "African_Bullfrog_2.jpg",
        "name": "Hrabatka Drsná"
      }
    ]
  },
  {
    "name": "PLAZI",
    "animals": [
      {
        "image": "d2bt7jugxri41.jpg",
        "name": "Velociraptor"
      },
      {
        "image": "Tyrannosaurus_rex_Reconstruction_by_Nobu_Tamura.jpg",
        "name": "Tyranosaurus"
      },
      {
        "image": "1000_F_252325113_CXprlP5tFDRaHqTKZiBfn4Uhj81kzKj1.jpg",
        "name": "Spinosaurus"
      },
      {
        "image": "640px-Dimetrodon_grandis.jpg",
        "name": "Dimetrodon"
      },
      {
        "image": "Euoplocephalus_BW.jpg",
        "name": "Euoplocephalus"
      },
      {
        "image": "Brachiosaurus-dinosaurus.jpg",
        "name": "Brachiosaurus"
      },
      {
        "image": "GettyImages-76127782-58da95df5f9b584683613ec2.jpg",
        "name": "Diplodocus"
      },
      {
        "image": "owYTb9X5fKpeBhgiaxD73b-1200-80.jpg",
        "name": "Stegosaurus"
      },
      {
        "image": "202004_Pachycephalosaurus_wyomingensis.jpg",
        "name": "Pachycephalosaurus"
      },
      {
        "image": "triceratops.jpg",
        "name": "Triceratops"
      },
      {
        "image": "plesiosaurus.jpg",
        "name": "Plesiosaurus"
      },
      {
        "image": "mosasaurus.jpg",
        "name": "Mosasaurus"
      },
      {
        "image": "Pteranodon_BW.jpg",
        "name": "Pteranodon"
      },
      {
        "image": "Aerodactylus_scolopaciceps.jpg",
        "name": "Pterodactylus"
      },
      {
        "image": "unnamed (5).jpg",
        "name": "Matamata Třásnitá"
      },
      {
        "image": "Floridasoftshellturtle-cropped.jpg",
        "name": "Kožnatka"
      },
      {
        "image": "Common_Snapping_Turtle_1429.jpg",
        "name": "Kajmanka"
      },
      {
        "image": "270px-LeatherbackTurtle.jpg",
        "name": "Kožatka Velká"
      },
      {
        "image": "kareta_obrovska_velka.jpg",
        "name": "Kareta"
      },
      {
        "image": "bohdal-zelva-bahenni-40432.jpg",
        "name": "Želva Bahenní"
      },
      {
        "image": "Chrysemis_pictas_pictas_2008-11-02_293.jpg",
        "name": "Želva Ozdobná"
      },
      {
        "image": "zelva_nadherna_tit.jpg",
        "name": "Želva Nádherná"
      },
      {
        "image": "Aldabra_Giant_Tortoise_Geochelone_gigantea_edit1.jpg",
        "name": "Želva Obrovská/sloní"
      },
      {
        "image": "Nabeulensis_sarda1.jpg",
        "name": "Želva Žlutohnědá"
      },
      {
        "image": "df290bc36916a88c398cb684f1748640-t3.jpg",
        "name": "Aligátor"
      },
      {
        "image": "MCE734aba_nilsk.jpg",
        "name": "Krokodýl"
      },
      {
        "image": "1200px-Indian_Gharial_Crocodile_Digon3.jpg",
        "name": "Gaviál Indický"
      },
      {
        "image": "Haterie_novozelandska_aneb_krok_zpet_do_prehistorie_1-e1621191533423.jpg",
        "name": "Haterie Novozélandská"
      },
      {
        "image": "MC_GruenerLeguan.jpg",
        "name": "Leguán Zelený"
      },
      {
        "image": "Marineiguana03,jpg",
        "name": "Leguán Mořský"
      },
      {
        "image": "IMG_8961.jpg",
        "name": "Ropušník"
      },
      {
        "image": "bazilisek-zeleny.jpg",
        "name": "Bazilišek Zelený"
      },
      {
        "image": "494338099_d77e1dcc47_o.jpg",
        "name": "Moloch Ostnitý"
      },
      {
        "image": "33-34-00-m1188567.jpg",
        "name": "Agama Vousatá"
      },
      {
        "image": "demopicture_25879_20160301123554.jpg",
        "name": "Dráček Létavý"
      },
      {
        "image": "Chamaeleo_chamaeleon_iberico.jpg",
        "name": "Chameleon Obecný"
      },
      {
        "image": "1200px-Gekko_gecko_(rock)_by_Robert_Michniewicz.jpg",
        "name": "Gekon Obrovský"
      },
      {
        "image": "204426.jpg",
        "name": "Scink Uťatý"
      },
      {
        "image": "258px-Anguidae.jpg",
        "name": "Slepýš Křehký"
      },
      {
        "image": "jesterka_obecna-_archiv_zoo.jpg",
        "name": "Ještěrka Obecná"
      },
      {
        "image": "JesterkaZelena.jpg",
        "name": "Ještěrka Zelená"
      },
      {
        "image": "dsc_6707.jpg",
        "name": "Korovec Jedovatý"
      },
      {
        "image": "Jesteri_obr_Varan_komodsky_1-scaled-e1621544575947.jpg",
        "name": "Varan Komodský"
      },
      {
        "image": "Hroznys-kralovsky-na-slunci.jpg",
        "name": "Hroznýš Královský"
      },
      {
        "image": "1200px-Sucuri_verde.jpg",
        "name": "Anakonda Velká"
      },
      {
        "image": "azbucak.jpg",
        "name": "Krajta Mřížkovaná"
      },
      {
        "image": "download (2).jpg",
        "name": "Užovka Obojková"
      },
      {
        "image": "1200px-Natrix_tessellata_Rheinland-Pfalz_02.jpg",
        "name": "Užovka Podplamatá"
      },
      {
        "image": "Couleuvre_Esculape59.jpg",
        "name": "Užovka Stromová"
      },
      {
        "image": "CoronellaAustriaca1.jpg",
        "name": "Užovka Hladká"
      },
      {
        "image": "270px-Boiga_dendrophila.jpg",
        "name": "Bojga"
      },
      {
        "image": "12_-_The_Mystical_King_Cobra_and_Coffee_Forests.jpg",
        "name": "Kobra Královská"
      },
      {
        "image": "44575.jpg",
        "name": "Kobra Indická"
      },
      {
        "image": "Dendroaspis_polylepis_by_Bill_Love.jpg",
        "name": "Mamba Černá"
      },
      {
        "image": "02027404.jpg",
        "name": "Korálovec"
      },
      {
        "image": "Fierce_Snake-Oxyuranus_microlepidotus.jpg",
        "name": "Taipan"
      },
      {
        "image": "270px-Hydrophis_belcheri_-_journal.pone.0027373.g005.jpg",
        "name": "Vodnáři"
      },
      {
        "image": "Benny_Trapp_Vipera_berus.jpg",
        "name": "Zmije Obecná"
      },
      {
        "image": "351410.jpg",
        "name": "Zmije Rohatá"
      },
      {
        "image": "Crotalus_lepidus_lepidus_1.jpg",
        "name": "Chřestýš Skalní"
      }
    ]
  }
]



export default defineEventHandler(async() => {
  console.log('seeding');
  // animals.map(async(groupIter) => {
  //   const groupRes = await db.insert(group).values({name: groupIter.name}).returning();
  //
  //   const groupId = groupRes[0].id;
  //   await Promise.all(groupIter.animals.map(async(animalIter) => {
  //     await db.insert(animal).values({
  //       name: animalIter.name,
  //       groupId,
  //       photo: animalIter.image
  //     })
  //   }));
  // })
})
