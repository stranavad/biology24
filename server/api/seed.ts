import {animal, group, history} from "~/drizzle/schema";
import {db} from "~/drizzle/db";
//

// const animals: {name: string, animals: {name: string, image: string}[]}[] = [
//   {
//     name: "NIŽŠÍ STRUNATCI A KRUHOÚSTÍ",
//     "animals": [
//       {
//         "image": "kopinatecplzovity.jpg",
//         "name": "Kopinatec Plžovitý"
//       },
//       {
//         "image": "mihule.jpg",
//         "name": "Mihule"
//       },
//       {
//         "image": "sliznatka-detail-1024x559.png",
//         "name": "Sliznatka Cizopasná"
//       }
//     ]
//   },
//   {
//     "name": "PARYBY",
//     "animals": [
//       {
//         "image": "chimera.jpg",
//         "name": "Chiméra"
//       },
//       {
//         "image": "ruznozobec.jpg",
//         "name": "Různozobec"
//       },
//       {
//         "image": "122294.jpg",
//         "name": "Wobegong"
//       },
//       {
//         "image": "zralokpico.jpg",
//         "name": "Žralok Vouskatý"
//       },
//       {
//         "image": "sharkbig.jpg",
//         "name": "Žralok Obrovský (velrybí)"
//       },
//       {
//         "image": "macka.jpg",
//         "name": "Máčka"
//       },
//       {
//         "image": "zralok-belavy-zralok-byci-84x_dsc_4427.jpg",
//         "name": "Žralok Bělavý (byčí)"
//       },
//       {
//         "image": "Tiger_shark(2).jpg",
//         "name": "Žralok Tygří"
//       },
//       {
//         "image": "Great_hammerhead2.jpg",
//         "name": "Kladivoun"
//       },
//       {
//         "image": "safira-858026.jpg",
//         "name": "Žralok Skvrnitý"
//       },
//       {
//         "image": "BPXq4.jpeg",
//         "name": "Liškoun Obecný"
//       },
//       {
//         "image": "8a3ed1fc-7d70-4374-a3e9-a9f2d4f18c1f.jpeg",
//         "name": "Žralok Veliký"
//       },
//       {
//         "image": "Great_White_Shark_(14914320281).jpg",
//         "name": "Žralok Bílý"
//       },
//       {
//         "image": "Kurzflossen-Mako.jpg",
//         "name": "Žralok Mako"
//       },
//       {
//         "image": "DTT9522f7_profimedia_0675480666.jpg",
//         "name": "Žralok Malohlavý (grónský)"
//       },
//       {
//         "image": "unnamed.jpg",
//         "name": "Světloun"
//       },
//       {
//         "image": "unnamed (1).jpg",
//         "name": "Ostroun"
//       },
//       {
//         "image": "324568.jpg",
//         "name": "Piloun"
//       },
//       {
//         "image": "Torpedo_marmorata2.jpg",
//         "name": "Parejnok Elektrický"
//       },
//       {
//         "image": "Raja_clavata_(juv).jpg",
//         "name": "Rejnok"
//       },
//       {
//         "image": "Taeniura_lymma2a.jpg",
//         "name": "Trnucha"
//       },
//       {
//         "image": "unnamed (2).jpg",
//         "name": "Siba"
//       },
//       {
//         "image": "502200140_univ_lsr_lg.jpg",
//         "name": "Manta"
//       }
//     ]
//   },
//   {
//     "name": "RYBY",
//     "animals": [
//       {
//         "image": "1901891.webp",
//         "name": "Latimerie"
//       },
//       {
//         "image": "640px-Australian-Lungfish.jpg",
//         "name": "Bahník (dvojdyšní)"
//       },
//       {
//         "image": "bichir-dehelzuv-polypterus-delhezi.jpg",
//         "name": "Bichir"
//       },
//       {
//         "image": "Alligator_Gar_10.jpeg",
//         "name": "Kostlín"
//       },
//       {
//         "image": "4471.webp",
//         "name": "Kaproun"
//       },
//       {
//         "image": "Sturgeon.jpg",
//         "name": "Jeseter"
//       },
//       {
//         "image": "vyza-velka.jpg",
//         "name": "Vyza Velká"
//       },
//       {
//         "image": "american-paddlefish.jpg",
//         "name": "Veslonos"
//       },
//       {
//         "image": "dupl_36695_arapaima-gigas_37602 (1).jpg",
//         "name": "Arapaima Velká"
//       },
//       {
//         "image": "Osteoglossum_bicirrhosum.JPG",
//         "name": "Arowana"
//       },
//       {
//         "image": "rypoun-1-M.jpg",
//         "name": "Rypoun"
//       },
//       {
//         "image": "Anguilla_anguilla.jpg",
//         "name": "Úhoř Říční"
//       },
//       {
//         "image": "Il_pasto.jpg",
//         "name": "Muréna"
//       },
//       {
//         "image": "amur-bily.jpg",
//         "name": "Amur Bílý"
//       },
//       {
//         "image": "leuciscus_aspius_bolen_dravy_01.jpg",
//         "name": "Bolen Dravý"
//       },
//       {
//         "image": "139931.jpg",
//         "name": "Lín Obecný"
//       },
//       {
//         "image": "parma-obecna-1.jpg",
//         "name": "Parma Obecná"
//       },
//       {
//         "image": "Abramis_brama_Prague_Vltava_1.jpg",
//         "name": "Cejn Velký"
//       },
//       {
//         "image": "60999_0.jpg",
//         "name": "Karas Obecný"
//       },
//       {
//         "image": "1591465842_575_kapr_obecny_683853481-jpg_irecept-full.jpg",
//         "name": "Kapr Obecný"
//       },
//       {
//         "image": "asian-bighead-carp.jpg",
//         "name": "Tolstolobik Obecný"
//       },
//       {
//         "image": "6225c9cbc80e0922770882.jpg",
//         "name": "Piskoř Pruhovaný"
//       },
//       {
//         "image": "Gregory_Moine_-_Red_bellied_Piranha_(by).jpg",
//         "name": "Piraňa"
//       },
//       {
//         "image": "Wels_Hafen.jpg",
//         "name": "Sumec Velký"
//       },
//       {
//         "image": "271px-Bristlenose_Catfish_700.jpg",
//         "name": "Krunýřovec"
//       },
//       {
//         "image": "16_01_uhor.jpg",
//         "name": "Paúhoř Elektrický"
//       },
//       {
//         "image": "losos.jpg",
//         "name": "Losos Obecný"
//       },
//       {
//         "image": "Salmo_trutta_Ozeaneum_Stralsund_HBP_2010-07-02.jpg",
//         "name": "Pstruh Potoční"
//       },
//       {
//         "image": "270px-Danube_Salmon_-_Huchen_(Hucho_hucho).jpg",
//         "name": "Hlavatka Podunajská"
//       },
//       {
//         "image": "Thymallus_thymallus2_(cropped).jpg",
//         "name": "Lipan Podhorní"
//       },
//       {
//         "image": "Salvelinus_fontinalis_Prague_Vltava_1.jpg",
//         "name": "Siven Americký"
//       },
//       {
//         "image": "Coregonus_lavaretus_maraena_1.jpg",
//         "name": "Síh Severní"
//       },
//       {
//         "image": "Northern_Pike_at_Umwelt_Garten.jpg",
//         "name": "Štika Obecná"
//       },
//       {
//         "image": "download.jpeg",
//         "name": "Treska Obecná"
//       },
//       {
//         "image": "mnik_jednovousy.jpg",
//         "name": "Mník Jednovousý"
//       },
//       {
//         "image": "Monkfish.jpg",
//         "name": "Ďas Mořský"
//       },
//       {
//         "image": "images.jpeg",
//         "name": "Letoun Obecný"
//       },
//       {
//         "image": "Periophtalmus_barbarus_03082014_Aquarium_Canet_en_Roussillon.jpg",
//         "name": "Lezec Obojživelný"
//       },
//       {
//         "image": "koljuska.jpg",
//         "name": "Koljuška Tříostná"
//       },
//       {
//         "image": "Hippocampus_guttulatus.jpg",
//         "name": "Koníček Mořský"
//       },
//       {
//         "image": "Lionfish_in_coral_reef_2004-11-17.jpeg",
//         "name": "Perutýn Ohnivý"
//       },
//       {
//         "image": "Cottus_gobio_(in_situ).jpg",
//         "name": "Vranka Obecná"
//       },
//       {
//         "image": "GiantGrouper018.jpeg",
//         "name": "Kanic Obrovský"
//       },
//       {
//         "image": "download (1).jpeg",
//         "name": "Zlak Nachový"
//       },
//       {
//         "image": "Pilot_fish,_India.jpg",
//         "name": "Lodivod Mořský"
//       },
//       {
//         "image": "PercheCommune.jpg",
//         "name": "Okoun Říční"
//       },
//       {
//         "image": "candat-obecny-371137508_irecept-full.jpg",
//         "name": "Candát Obecný"
//       },
//       {
//         "image": "prazma-obecna-couch-kolorovany-drevoryt-1865.jpg",
//         "name": "Pražma Obecná"
//       },
//       {
//         "image": "Amphiprion_ocellaris_(Clown_anemonefish)_Nemo.jpg",
//         "name": "Klaun Očkatý"
//       },
//       {
//         "image": "Blue_tang_(Paracanthurus_hepatus)_01.jpg",
//         "name": "Bodlok Pestrý"
//       },
//       {
//         "image": "Zanclus_cornutus_in_Kona.jpg",
//         "name": "Bičonoš"
//       },
//       {
//         "image": "Barracuda_laban.jpg",
//         "name": "Soltýn Barakuda"
//       },
//       {
//         "image": "HM_Orange_M_Sarawut.jpg",
//         "name": "Bojovnice Pestrá"
//       },
//       {
//         "image": "Scomber_scombrus.jpg",
//         "name": "Makrela Obecná"
//       },
//       {
//         "image": "ab1b7b7dfcb382b37c705ca540656e5b.jpg",
//         "name": "Tuňák Obecný"
//       },
//       {
//         "image": "ywHJC0.jpeg",
//         "name": "Mečoun Obecný"
//       },
//       {
//         "image": "Indo-Pacific-sailfish-lateral-view-604x270.jpg",
//         "name": "Plachetník Atlantský"
//       },
//       {
//         "image": "Freshwater_angelfish_biodome.jpg",
//         "name": "Skalára"
//       },
//       {
//         "image": "300px-Pleuronectes_platessa.jpg",
//         "name": "Platýs"
//       },
//       {
//         "image": "640px-Fugu_in_Tank.jpg",
//         "name": "Čtverzubec Fugu"
//       },
//       {
//         "image": "Diodon_hystrix.jpg",
//         "name": "Ježík Obecný"
//       },
//       {
//         "image": "401869.jpg",
//         "name": "Měsíčník Svítivý"
//       }
//     ]
//   },
//   {
//     "name": "OBOJZIVELNICI",
//     "animals": [
//       {
//         "image": "BEL536679_mlok.jpg",
//         "name": "Velemlok"
//       },
//       {
//         "image": "Postojna-cave-proteus-2.jpg",
//         "name": "Macarát Jeskynní"
//       },
//       {
//         "image": "Mlok.jpeg",
//         "name": "Mlok Skvrnitý"
//       },
//       {
//         "image": "mlokthenigga.jpg",
//         "name": "Mlok Černý"
//       },
//       {
//         "image": "Triturus_vulgaris.jpg",
//         "name": "Čolek Obecný"
//       },
//       {
//         "image": "Triturus_alpestris.jpg",
//         "name": "Čolek Horský"
//       },
//       {
//         "image": "Axolotl2.jpg",
//         "name": "Axolotl Mexický"
//       },
//       {
//         "image": "unnamed (3).jpg",
//         "name": "Axolotl Skvrnitý"
//       },
//       {
//         "image": "depositphotos_455874158-stock-photo-selective-focus-shot-blue-spotted.jpg",
//         "name": "Axolotl Modroskvrný"
//       },
//       {
//         "image": "unnamed (4).jpg",
//         "name": "Červor Cejlonský"
//       },
//       {
//         "image": "Siphonops_annulatus_IRDias_2014.png",
//         "name": "Cecílie Kroužkovaná"
//       },
//       {
//         "image": "270px-Bombina_bombina_1_(Marek_Szczepanek).jpg",
//         "name": "Kuňka Obecná"
//       },
//       {
//         "image": "BombinaVariegataJuv.jpg",
//         "name": "Kuňka Žlutobřichá"
//       },
//       {
//         "image": "AlytesObstet.jpg",
//         "name": "Ropuška Starostlivá"
//       },
//       {
//         "image": "Pipa_pipa_juillet_2007_-_1.jpg",
//         "name": "Pipa Americká"
//       },
//       {
//         "image": "Gemeiner_Krallenfrosch_-_Xenopus_laevis_-_aus_Afrika_ArM.jpg",
//         "name": "Drápatka Vodní"
//       },
//       {
//         "image": "PelobatesFuscus.jpg",
//         "name": "Blatnice Skvrnitá"
//       },
//       {
//         "image": "Myobatrachus_gouldii_(lateral_view).png",
//         "name": "Paropucha Křížová"
//       },
//       {
//         "image": "220px-Argentine_horned_frog_(Ceratophrys_ornata).jpg",
//         "name": "Rohatka Ozdobná"
//       },
//       {
//         "image": "ropucha_obecna.jpg",
//         "name": "Ropucha Obecná"
//       },
//       {
//         "image": "Bufotes_balearicus_female_quadrat.jpg",
//         "name": "Ropucha Zelená"
//       },
//       {
//         "image": "Hyla_arborea_(Marek_Szczepanek).jpg",
//         "name": "Rosnička Zelená"
//       },
//       {
//         "image": "Rhacophorus_nigropalmatus.jpg",
//         "name": "Létavka"
//       },
//       {
//         "image": "Red_eyed_tree_frog_edit2.jpg",
//         "name": "Listovnice Červenooká"
//       },
//       {
//         "image": "270px-Dendrobates-azureus.jpg",
//         "name": "Pralesnička Azurová"
//       },
//       {
//         "image": "Ranitomeya_amazonica.jpg",
//         "name": "Pralesnička Síťkovaná"
//       },
//       {
//         "image": "Golden_Poison_dart_frog_Phyllobates_terribilis.jpg",
//         "name": "Pralesnička Strašná"
//       },
//       {
//         "image": "Teichfrosch.jpg",
//         "name": "Skokan Zelený"
//       },
//       {
//         "image": "European_Common_Frog_Rana_temporaria_(cropped).jpg",
//         "name": "Skokan Hnědý"
//       },
//       {
//         "image": "African_Bullfrog_2.jpg",
//         "name": "Hrabatka Drsná"
//       }
//     ]
//   },
//   {
//     "name": "PLAZI",
//     "animals": [
//       {
//         "image": "d2bt7jugxri41.jpg",
//         "name": "Velociraptor"
//       },
//       {
//         "image": "Tyrannosaurus_rex_Reconstruction_by_Nobu_Tamura.jpg",
//         "name": "Tyranosaurus"
//       },
//       {
//         "image": "1000_F_252325113_CXprlP5tFDRaHqTKZiBfn4Uhj81kzKj1.jpg",
//         "name": "Spinosaurus"
//       },
//       {
//         "image": "640px-Dimetrodon_grandis.jpg",
//         "name": "Dimetrodon"
//       },
//       {
//         "image": "Euoplocephalus_BW.jpg",
//         "name": "Euoplocephalus"
//       },
//       {
//         "image": "Brachiosaurus-dinosaurus.jpg",
//         "name": "Brachiosaurus"
//       },
//       {
//         "image": "GettyImages-76127782-58da95df5f9b584683613ec2.jpg",
//         "name": "Diplodocus"
//       },
//       {
//         "image": "owYTb9X5fKpeBhgiaxD73b-1200-80.jpg",
//         "name": "Stegosaurus"
//       },
//       {
//         "image": "202004_Pachycephalosaurus_wyomingensis.png",
//         "name": "Pachycephalosaurus"
//       },
//       {
//         "image": "triceratops.jpg",
//         "name": "Triceratops"
//       },
//       {
//         "image": "plesiosaurus.jpg",
//         "name": "Plesiosaurus"
//       },
//       {
//         "image": "mosasaurus.jpg",
//         "name": "Mosasaurus"
//       },
//       {
//         "image": "Pteranodon_BW.jpg",
//         "name": "Pteranodon"
//       },
//       {
//         "image": "Aerodactylus_scolopaciceps.jpg",
//         "name": "Pterodactylus"
//       },
//       {
//         "image": "unnamed (5).jpg",
//         "name": "Matamata Třásnitá"
//       },
//       {
//         "image": "Floridasoftshellturtle-cropped.jpg",
//         "name": "Kožnatka"
//       },
//       {
//         "image": "Common_Snapping_Turtle_1429.jpg",
//         "name": "Kajmanka"
//       },
//       {
//         "image": "270px-LeatherbackTurtle.jpg",
//         "name": "Kožatka Velká"
//       },
//       {
//         "image": "kareta_obrovska_velka.jpg",
//         "name": "Kareta"
//       },
//       {
//         "image": "bohdal-zelva-bahenni-40432.jpg",
//         "name": "Želva Bahenní"
//       },
//       {
//         "image": "Chrysemis_pictas_pictas_2008-11-02_293.jpeg",
//         "name": "Želva Ozdobná"
//       },
//       {
//         "image": "zelva_nadherna_tit.jpg",
//         "name": "Želva Nádherná"
//       },
//       {
//         "image": "Aldabra_Giant_Tortoise_Geochelone_gigantea_edit1.jpg",
//         "name": "Želva Obrovská/sloní"
//       },
//       {
//         "image": "Nabeulensis_sarda1.jpeg",
//         "name": "Želva Žlutohnědá"
//       },
//       {
//         "image": "df290bc36916a88c398cb684f1748640-t3.jpeg",
//         "name": "Aligátor"
//       },
//       {
//         "image": "MCE734aba_nilsk.jpg",
//         "name": "Krokodýl"
//       },
//       {
//         "image": "1200px-Indian_Gharial_Crocodile_Digon3.jpeg",
//         "name": "Gaviál Indický"
//       },
//       {
//         "image": "Haterie_novozelandska_aneb_krok_zpet_do_prehistorie_1-e1621191533423.jpg",
//         "name": "Haterie Novozélandská"
//       },
//       {
//         "image": "MC_GruenerLeguan.jpg",
//         "name": "Leguán Zelený"
//       },
//       {
//         "image": "Marineiguana03.jpg",
//         "name": "Leguán Mořský"
//       },
//       {
//         "image": "IMG_8961.jpg",
//         "name": "Ropušník"
//       },
//       {
//         "image": "bazilisek-zeleny.jpg",
//         "name": "Bazilišek Zelený"
//       },
//       {
//         "image": "494338099_d77e1dcc47_o.jpg",
//         "name": "Moloch Ostnitý"
//       },
//       {
//         "image": "33-34-00-m1188567.jpg",
//         "name": "Agama Vousatá"
//       },
//       {
//         "image": "demopicture_25879_20160301123554.jpg",
//         "name": "Dráček Létavý"
//       },
//       {
//         "image": "Chamaeleo_chamaeleon_iberico.jpg",
//         "name": "Chameleon Obecný"
//       },
//       {
//         "image": "1200px-Gekko_gecko_(rock)_by_Robert_Michniewicz.jpg",
//         "name": "Gekon Obrovský"
//       },
//       {
//         "image": "204426.jpg",
//         "name": "Scink Uťatý"
//       },
//       {
//         "image": "258px-Anguidae.jpg",
//         "name": "Slepýš Křehký"
//       },
//       {
//         "image": "jesterka_obecna-_archiv_zoo.jpeg",
//         "name": "Ještěrka Obecná"
//       },
//       {
//         "image": "JesterkaZelena.jpg",
//         "name": "Ještěrka Zelená"
//       },
//       {
//         "image": "dsc_6707.jpg",
//         "name": "Korovec Jedovatý"
//       },
//       {
//         "image": "Jesteri_obr_Varan_komodsky_1-scaled-e1621544575947.jpg",
//         "name": "Varan Komodský"
//       },
//       {
//         "image": "Hroznys-kralovsky-na-slunci.jpeg",
//         "name": "Hroznýš Královský"
//       },
//       {
//         "image": "1200px-Sucuri_verde.jpg",
//         "name": "Anakonda Velká"
//       },
//       {
//         "image": "azbucak.jpg",
//         "name": "Krajta Mřížkovaná"
//       },
//       {
//         "image": "download (2).jpeg",
//         "name": "Užovka Obojková"
//       },
//       {
//         "image": "1200px-Natrix_tessellata_Rheinland-Pfalz_02.jpg",
//         "name": "Užovka Podplamatá"
//       },
//       {
//         "image": "Couleuvre_Esculape59.jpeg",
//         "name": "Užovka Stromová"
//       },
//       {
//         "image": "CoronellaAustriaca1.jpg",
//         "name": "Užovka Hladká"
//       },
//       {
//         "image": "270px-Boiga_dendrophila.jpg",
//         "name": "Bojga"
//       },
//       {
//         "image": "12_-_The_Mystical_King_Cobra_and_Coffee_Forests.jpg",
//         "name": "Kobra Královská"
//       },
//       {
//         "image": "44575.jpg",
//         "name": "Kobra Indická"
//       },
//       {
//         "image": "Dendroaspis_polylepis_by_Bill_Love.jpg",
//         "name": "Mamba Černá"
//       },
//       {
//         "image": "02027404.jpeg",
//         "name": "Korálovec"
//       },
//       {
//         "image": "Fierce_Snake-Oxyuranus_microlepidotus.jpg",
//         "name": "Taipan"
//       },
//       {
//         "image": "270px-Hydrophis_belcheri_-_journal.pone.0027373.g005.png",
//         "name": "Vodnáři"
//       },
//       {
//         "image": "Benny_Trapp_Vipera_berus.jpg",
//         "name": "Zmije Obecná"
//       },
//       {
//         "image": "351410.jpg",
//         "name": "Zmije Rohatá"
//       },
//       {
//         "image": "Crotalus_lepidus_lepidus_1.jpg",
//         "name": "Chřestýš Skalní"
//       }
//     ]
//   }
// ]

const animals: {filename: string, name: string}[] = [
    {filename: "0.jpg", name: "pštros dvouprstý"},
    {filename: "1.jpg", name: "nandu pampový"},
    {filename: "2.jpg", name: "emu hnědý"},
    {filename: "3.jpg", name: "kasuár přílbový"},
    {filename: "4.jpg", name: "kivi jižní"},
    {filename: "5.jpg", name: "tinama velká"},
    {filename: "6.jpg", name: "tučňák císařský"},
    {filename: "7.jpg", name: "tučňák patagonský"},
    {filename: "8.jpg", name: "tučňák Humboldtův"},
    {filename: "9.jpg", name: "tučňák kroužkový"},
    {filename: "10.jpg", name: "potáplice lední"},
    {filename: "11.jpg", name: "potápka roháč"},
    {filename: "12.jpg", name: "albatros"},
    {filename: "13.jpg", name: "pelikán bílý"},
    {filename: "14.jpg", name: "terej bílý"},
    {filename: "15.jpg", name: "kormorán velký"},
    {filename: "16.jpg", name: "volavka popelavá"},
    {filename: "17.jpg", name: "bukač velký"},
    {filename: "18.jpg", name: "člunozobec"},
    {filename: "19.jpg", name: "čáp bílý"},
    {filename: "20.jpg", name: "čáp černý"},
    {filename: "21.jpg", name: "ibis posvátný"},
    {filename: "22.jpg", name: "kolpík bílý"},
    {filename: "23.jpg", name: "plameňák"},
    {filename: "24.jpg", name: "kondor andský"},
    {filename: "25.jpg", name: "orlovec říční"},
    {filename: "26.jpg", name: "sup bělohlavý"},
    {filename: "27.jpg", name: "krahujec obecný"},
    {filename: "28.jpg", name: "jestřáb lesní"},
    {filename: "29.jpg", name: "káně lesní"},
    {filename: "30.jpg", name: "harpyje"},
    {filename: "31.jpg", name: "orel mořský"},
    {filename: "32.jpg", name: "hadilov písař"},
    {filename: "33.jpg", name: "poštolka obecná"},
    {filename: "34.jpg", name: "ostříž lesní"},
    {filename: "35.jpg", name: "sokol stěhovavý"},
    {filename: "36.jpg", name: "labuť velká"},
    {filename: "37.jpg", name: "labuť černá"},
    {filename: "38.jpg", name: "husa velká"},
    {filename: "39.jpg", name: "kachnička mandarínská"},
    {filename: "40.jpg", name: "kopřivka obecná"},
    {filename: "41.jpg", name: "čírka obecná"},
    {filename: "42.jpg", name: "kachna divoká"},
    {filename: "43.jpg", name: "zrzohlávka rudozobá"},
    {filename: "44.jpg", name: "polák chocholačka"},
    {filename: "45.jpg", name: "hohol severní"},
    {filename: "46.jpg", name: "krocan divoký"},
    {filename: "47.jpg", name: "tetřev hlušec"},
    {filename: "48.jpg", name: "tetřívek obecný"},
    {filename: "49.jpg", name: "koroptev polní"},
    {filename: "50.jpg", name: "křepelka polní"},
    {filename: "51.jpg", name: "kur bankivský"},
    {filename: "52.jpg", name: "kur domácí"},
    {filename: "53.jpg", name: "bažant obecný"},
    {filename: "54.jpg", name: "páv korunkatý"},
    {filename: "55.jpg", name: "perlička kropenatá"},
    {filename: "56.jpg", name: "holub skalní"},
    {filename: "57.jpg", name: "holub hřivnáč"},
    {filename: "58.jpg", name: "holub královský"},
    {filename: "59.jpg", name: "hrdlička zahradní"},
    {filename: "60.jpg", name: "dronte mauricijský"},
    {filename: "61.jpg", name: "jeřáb popelavý"},
    {filename: "62.jpg", name: "chřástal vodní"},
    {filename: "63.jpg", name: "lyska černá"},
    {filename: "64.jpg", name: "drop velký"},
    {filename: "65.jpg", name: "čejka chocholatá"},
    {filename: "66.jpg", name: "sluka lesní"},
    {filename: "67.jpg", name: "racek chechtavý"},
    {filename: "68.jpg", name: "racek mořský"},
    {filename: "69.jpg", name: "alka malá"},
    {filename: "70.jpg", name: "papuchalk severní"},
    {filename: "71.jpg", name: "lori mnohobarvý"},
    {filename: "72.jpg", name: "kakadu žlutočečelatý"},
    {filename: "73.jpg", name: "korela chocholatá"},
    {filename: "74.jpg", name: "andulka vlnkovaná"},
    {filename: "75.jpg", name: "papoušek šedý"},
    {filename: "76.jpg", name: "ara hyacintový"},
    {filename: "77.jpg", name: "ara ararauna"},
    {filename: "78.jpg", name: "amazoňan"},
    {filename: "79.jpg", name: "kakapo soví"},
    {filename: "80.jpg", name: "kukačka obecná"},
    {filename: "81.jpg", name: "rorýs obecný"},
    {filename: "82.jpg", name: "kolibřík"},
    {filename: "83.jpg", name: "sova pálená"},
    {filename: "84.jpg", name: "výr velký"},
    {filename: "85.jpg", name: "sovice sněžní"},
    {filename: "86.jpg", name: "puštík obecný"},
    {filename: "87.jpg", name: "sýček obecný"},
    {filename: "88.jpg", name: "kalous ušatý"},
    {filename: "89.jpg", name: "lelek lesní"},
    {filename: "90.jpg", name: "ledňáček říční"},
    {filename: "91.jpg", name: "vlha pestrá"},
    {filename: "92.jpg", name: "dudek chocholatý"},
    {filename: "93.jpg", name: "tukan obrovský"},
    {filename: "94.jpg", name: "datel černý"},
    {filename: "95.jpg", name: "strakapoud velký"},
    {filename: "96.jpg", name: "žluna zelená"},
    {filename: "97.jpg", name: "skřivan polní"},
    {filename: "98.jpg", name: "vlaštovka obecná"},
    {filename: "99.jpg", name: "jiřička obecná"},
    {filename: "100.jpg", name: "konipas bílý"},
    {filename: "101.jpg", name: "ťuhýk obecný"},
    {filename: "102.jpg", name: "brkoslav severní"},
    {filename: "103.jpg", name: "červenka obecná"},
    {filename: "104.jpg", name: "kos černý"},
    {filename: "105.jpg", name: "drozd kvíčala"},
    {filename: "106.jpg", name: "rákosník obecný"},
    {filename: "107.jpg", name: "sýkora koňadra"},
    {filename: "108.jpg", name: "sýkora modřinka"},
    {filename: "109.jpg", name: "pěnkava obecná"},
    {filename: "110.jpg", name: "stehlík obecný"},
    {filename: "111.jpg", name: "hýl rudý"},
    {filename: "112.jpg", name: "křivka obecná"},
    {filename: "113.jpg", name: "dlask tlustozobý"},
    {filename: "114.jpg", name: "vrabec domácí"},
    {filename: "115.jpg", name: "špaček obecný"},
    {filename: "116.jpg", name: "sojka obecná"},
    {filename: "117.jpg", name: "straka obecná"},
    {filename: "118.jpg", name: "kavka obecná"},
    {filename: "119.jpg", name: "havran polní"},
    {filename: "120.jpg", name: "vrána obecná"},
    {filename: "121.jpg", name: "krkavec velký"},
    {filename: "122.jpg", name: "ptakopysk podivný"},
    {filename: "123.jpg", name: "ježura australská"},
    {filename: "124.jpg", name: "vačice opossum"},
    {filename: "125.jpg", name: "ďábel medvědovitý"},
    {filename: "126.jpg", name: "koala"},
    {filename: "127.jpg", name: "klokan rudý"},
    {filename: "128.jpg", name: "ježek západní"},
    {filename: "129.jpg", name: "krtek obecný"},
    {filename: "130.jpg", name: "rejsek obecný"},
    {filename: "131.jpg", name: "kaloň malajský"},
    {filename: "132.jpg", name: "upír obecný"},
    {filename: "133.jpg", name: "netopýr"},
    {filename: "134.jpg", name: "vrápenec velký"},
    {filename: "135.jpg", name: "letucha filipínská"},
    {filename: "136.jpg", name: "tana obecná"},
    {filename: "137.jpg", name: "lemur kata"},
    {filename: "138.jpg", name: "komba ušatá"},
    {filename: "139.jpg", name: "nártoun filipínský"},
    {filename: "140.jpg", name: "lvíček zlatý"},
    {filename: "141.jpg", name: "malpa kapucínská"},
    {filename: "142.jpg", name: "vřešťan rezavý"},
    {filename: "143.jpg", name: "chápan černý"},
    {filename: "144.jpg", name: "makak rhesus"},
    {filename: "145.jpg", name: "pavián pláštíkový"},
    {filename: "146.jpg", name: "gueréza"},
    {filename: "147.jpg", name: "mandril rýholící"},
    {filename: "148.jpg", name: "gibon lar"},
    {filename: "149.jpg", name: "šimpanz"},
    {filename: "150.jpg", name: "orangutan"},
    {filename: "151.jpg", name: "gorila nížinná"},
    {filename: "152.jpg", name: "gorila horská"},
    {filename: "153.jpg", name: "lenochod tříprstý"},
    {filename: "154.jpg", name: "mravenečník velký"},
    {filename: "155.jpg", name: "pásovec devítipásý"},
    {filename: "156.jpg", name: "luskoun velký"},
    {filename: "157.jpg", name: "zajíc polní"},
    {filename: "158.jpg", name: "králík divoký"},
    {filename: "159.jpg", name: "pišťucha horská"},
    {filename: "160.jpg", name: "veverka obecná"},
    {filename: "161.jpg", name: "veverka popelavá"},
    {filename: "162.jpg", name: "sysel obecný"},
    {filename: "163.jpg", name: "svišť horský"},
    {filename: "164.jpg", name: "křeček polní"},
    {filename: "165.jpg", name: "lumík horský"},
    {filename: "166.jpg", name: "bobr"},
    {filename: "167.jpg", name: "nutrie říční"},
    {filename: "168.jpg", name: "myš domácí"},
    {filename: "169.jpg", name: "hraboš polní"},
    {filename: "170.jpg", name: "potkan"},
    {filename: "171.jpg", name: "krysa"},
    {filename: "172.jpg", name: "plch velký"},
    {filename: "173.jpg", name: "tarbík egyptský"},
    {filename: "174.jpg", name: "rypoš lysý"},
    {filename: "175.jpg", name: "dikobraz"},
    {filename: "176.jpg", name: "kapybara"},
    {filename: "177.jpg", name: "činčila vlnatá"},
    {filename: "178.jpg", name: "liška obecná"},
    {filename: "179.jpg", name: "vlk"},
    {filename: "180.jpg", name: "fenek"},
    {filename: "181.jpg", name: "kočka divoká"},
    {filename: "182.jpg", name: "rys ostrovid"},
    {filename: "183.jpg", name: "lev"},
    {filename: "184.jpg", name: "tygr"},
    {filename: "185.jpg", name: "levhart"},
    {filename: "186.jpg", name: "jaguár"},
    {filename: "187.jpg", name: "levhart sněžný"},
    {filename: "188.jpg", name: "gepard štíhlý"},
    {filename: "189.jpg", name: "puma americká"},
    {filename: "190.jpg", name: "medvěd hnědý"},
    {filename: "191.jpg", name: "medvěd baribal"},
    {filename: "192.jpg", name: "medvěd lední"},
    {filename: "193.jpg", name: "lasice hranostaj"},
    {filename: "194.jpg", name: "kuna skalní"},
    {filename: "195.jpg", name: "tchoř tmavý"},
    {filename: "196.jpg", name: "jezevec lesní"},
    {filename: "197.jpg", name: "medojed kapský"},
    {filename: "198.jpg", name: "vydra říční"},
    {filename: "199.jpg", name: "rosomák"},
    {filename: "200.jpg", name: "skunk"},
    {filename: "201.jpg", name: "hyena skvrnitá"},
    {filename: "202.jpg", name: "mangusta žíhaná"},
    {filename: "203.jpg", name: "surikata"},
    {filename: "204.jpg", name: "fosa madagaskarská"},
    {filename: "205.jpg", name: "mýval severní"},
    {filename: "206.jpg", name: "panda velká"},
    {filename: "207.jpg", name: "panda červená"},
    {filename: "208.jpg", name: "lachtan"},
    {filename: "209.jpg", name: "tuleň"},
    {filename: "210.jpg", name: "rypouš sloní"},
    {filename: "211.jpg", name: "mrož"},
    {filename: "212.jpg", name: "hrabáč kapský"},
    {filename: "213.jpg", name: "daman skalní"},
    {filename: "214.jpg", name: "kapustňák"},
    {filename: "215.jpg", name: "dugong"},
    {filename: "216.jpg", name: "slon africký"},
    {filename: "217.jpg", name: "slon indický"},
    {filename: "218.jpg", name: "tapír"},
    {filename: "219.jpg", name: "nosorožec"},
    {filename: "220.jpg", name: "kůň převalského"},
    {filename: "221.jpg", name: "osel africký"},
    {filename: "222.jpg", name: "zebra"},
    {filename: "223.jpg", name: "prase divoké"},
    {filename: "224.jpg", name: "prase bradavičnaté"},
    {filename: "225.jpg", name: "pekari páskovaný"},
    {filename: "226.jpg", name: "hroch obojživelný"},
    {filename: "227.jpg", name: "hrošík liberijský"},
    {filename: "228.jpg", name: "velbloud dvouhrbý"},
    {filename: "229.jpg", name: "velbloud jednohrbý"},
    {filename: "230.jpg", name: "lama"},
    {filename: "231.jpg", name: "jelen lesní"},
    {filename: "232.jpg", name: "srnec obecný"},
    {filename: "233.jpg", name: "daněk evropský"},
    {filename: "234.jpg", name: "sob polární"},
    {filename: "235.jpg", name: "žirafa"},
    {filename: "236.jpg", name: "okapi pruhovaná"},
    {filename: "237.jpg", name: "vidloroh americký"},
    {filename: "238.jpg", name: "kudu velký"},
    {filename: "239.jpg", name: "přímorožec"},
    {filename: "240.jpg", name: "pakůň"},
    {filename: "241.jpg", name: "antilopa jelení"},
    {filename: "242.jpg", name: "antilopa skákavá"},
    {filename: "243.jpg", name: "gazela"},
    {filename: "244.jpg", name: "sajga tatarská"},
    {filename: "245.jpg", name: "kamzík horský"},
    {filename: "246.jpg", name: "kozorožec alpský"},
    {filename: "247.jpg", name: "muflon"},
    {filename: "248.jpg", name: "zubr evropský"},
    {filename: "249.jpg", name: "bizon americký"},
    {filename: "250.jpg", name: "buvol africký"},
    {filename: "251.jpg", name: "pižmoň"},
    {filename: "252.jpg", name: "plejtvák"},
    {filename: "253.jpg", name: "keporkak"},
    {filename: "254.jpg", name: "velryba grónská"},
    {filename: "255.jpg", name: "delfín skákavý"},
    {filename: "256.jpg", name: "sviňucha"},
    {filename: "257.jpg", name: "kosatka dravá"},
    {filename: "258.jpg", name: "narval"},
    {filename: "259.jpg", name: "vorvaň"},
    {filename: "260.jpg", name: "běluha"},
    {filename: "261.jpg", name: "delfínovec amazonský"}
  ]




export default defineEventHandler(async() => {
    return;
  // console.log('seeding');
  //
  // await db.delete(history)
  // await db.delete(animal)
  // await db.delete(group)
  //
  // const groupRes = await db.insert(group).values({name: "Savci"}).returning();
  //
  // for(const item of animals){
  //   await db.insert(animal).values({
  //     name: item.name,
  //     groupId: groupRes[0].id,
  //     photo: item.filename
  //   })
  // }

  // for(const groupIter of animals){
  //
  //   const groupId = groupRes[0].id;
  //   for(const animalIter of groupIter.animals){
  //     await db.insert(animal).values({
  //       name: animalIter.name,
  //       groupId,
  //       photo: animalIter.image
  //     })
  //   }
  //   // }));
  // }
  //
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
