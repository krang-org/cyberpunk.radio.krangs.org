window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function( e ){
  var offset = this.getBoundingClientRect();
  var x = e.pageX - offset.left;

  Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

Amplitude.init({
  "shuffle_on": true,
  "bindings": {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },
  "songs": [
    {
      "name": "Hybrionics N Drive Corporation",
      "url": "./commercials/en-US/cyberweapon-development/hybrionics-n-drive-corporation/16741572607660/commercial.mp3",
      "artist": "Cyberweapon Development",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Dataspark Polymorph Solutions",
      "url": "./commercials/en-US/nanotech-manufacturing/dataspark-polymorph-solutions/16741571670810/commercial.mp3",
      "artist": "Nanotech Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Datawire Macroplex",
      "url": "./commercials/en-US/synthetic-food-production/datawire-macroplex/16741573249120/commercial.mp3",
      "artist": "Synthetic Food Production",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Injector Systems",
      "url": "./commercials/en-US/autonomous-agents/injector-systems/16741543771900/commercial.mp3",
      "artist": "Autonomous Agents",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Netwitch Neontorque Group",
      "url": "./commercials/en-US/autonomous-asset-management/netwitch-neontorque-group/16741573170150/commercial.mp3",
      "artist": "Autonomous Asset Management",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Akana Company",
      "url": "./commercials/en-US/cyber-physical-security-and-surveillance-systems/akana-company/16741546177880/commercial.mp3",
      "artist": "Cyber Physical Security And Surveillance Systems",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Surgenshock Servo Tron Systems",
      "url": "./commercials/en-US/cyber-weapons/surgenshock-servo-tron-systems/16741573109990/commercial.mp3",
      "artist": "Cyber Weapons",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Blackroot Interlock",
      "url": "./commercials/en-US/bioprocessing-technologies/blackroot-interlock/16741572675410/commercial.mp3",
      "artist": "Bioprocessing Technologies",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Plasmatech Firm",
      "url": "./commercials/en-US/cryogenic-storage/plasmatech-firm/16741547412950/commercial.mp3",
      "artist": "Cryogenic Storage",
      "cover_art_url": "assets/img/krang/krang-radio-077.jpg"
    },
    {
      "name": "Fluxwave Cyberwave Tech",
      "url": "./commercials/en-US/neuro-gaming/fluxwave-cyberwave-tech/16741543502680/commercial.mp3",
      "artist": "Neuro Gaming",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "Voltplex Hyperweave",
      "url": "./commercials/en-US/solar-energy/voltplex-hyperweave/16741573660850/commercial.mp3",
      "artist": "Solar Energy",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Cyberecho Coreshadow Solutions",
      "url": "./commercials/en-US/cyberweapon-development/cyberecho-coreshadow-solutions/16741574264780/commercial.mp3",
      "artist": "Cyberweapon Development",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Cyberkinetic Solutions",
      "url": "./commercials/en-US/cybernetic-organ-transplants/cyberkinetic-solutions/16741542375850/commercial.mp3",
      "artist": "Cybernetic Organ Transplants",
      "cover_art_url": "assets/img/krang/krang-radio-078.jpg"
    },
    {
      "name": "Dataspark Giga Run Solutions",
      "url": "./commercials/en-US/cyberware-development/dataspark-giga-run-solutions/16741543376360/commercial.mp3",
      "artist": "Cyberware Development",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Autozone Company",
      "url": "./commercials/en-US/ai-driven-healthcare-management/autozone-company/16741545487610/commercial.mp3",
      "artist": "Ai Driven Healthcare Management",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Syntronix Watraspark",
      "url": "./commercials/en-US/artificial-intelligence-research/syntronix-watraspark/16741574493060/commercial.mp3",
      "artist": "Artificial Intelligence Research",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Datawire Group",
      "url": "./commercials/en-US/biotech-manufacturing/datawire-group/16741547573350/commercial.mp3",
      "artist": "Biotech Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Corespike Shapetron",
      "url": "./commercials/en-US/3d-printing/corespike-shapetron/16741578360360/commercial.mp3",
      "artist": "3d Printing",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Glitchwitch Company",
      "url": "./commercials/en-US/micro-satellite-launch-services/glitchwitch-company/16741547246310/commercial.mp3",
      "artist": "Micro Satellite Launch Services",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Fluxtek Refreeze Group",
      "url": "./commercials/en-US/genome-editing/fluxtek-refreeze-group/16741572903240/commercial.mp3",
      "artist": "Genome Editing",
      "cover_art_url": "assets/img/krang/krang-radio-069.jpg"
    },
    {
      "name": "Coresphere Echoflux Firm",
      "url": "./commercials/en-US/neuro-surveillance/coresphere-echoflux-firm/16741577534590/commercial.mp3",
      "artist": "Neuro Surveillance",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Mechanoid Group",
      "url": "./commercials/en-US/cryogenic-preservation/mechanoid-group/16741543205570/commercial.mp3",
      "artist": "Cryogenic Preservation",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Flesh Tech Exozone Group",
      "url": "./commercials/en-US/bioluminescent-armor-/flesh-tech-exozone-group/16741576805880/commercial.mp3",
      "artist": "Bioluminescent Armor ",
      "cover_art_url": "assets/img/krang/krang-radio-029.jpg"
    },
    {
      "name": "Reverzo Morphefix",
      "url": "./commercials/en-US/neurotechnology/reverzo-morphefix/16741543452390/commercial.mp3",
      "artist": "Neurotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-097.jpg"
    },
    {
      "name": "Scopefire Cryoforge",
      "url": "./commercials/en-US/autonomous-data-analysis/scopefire-cryoforge/16741576551700/commercial.mp3",
      "artist": "Autonomous Data Analysis",
      "cover_art_url": "assets/img/krang/krang-radio-024.jpg"
    },
    {
      "name": "Omegacore Subspark",
      "url": "./commercials/en-US/drone-delivery-services/omegacore-subspark/16741576487360/commercial.mp3",
      "artist": "Drone Delivery Services",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Optifire Tech",
      "url": "./commercials/en-US/infiltration-services/optifire-tech/16741539216750/commercial.mp3",
      "artist": "Infiltration Services",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Rezipod Nautikal",
      "url": "./commercials/en-US/biomechanical-engineering/rezipod-nautikal/16741573605000/commercial.mp3",
      "artist": "Biomechanical Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Gellaser Phazecore",
      "url": "./commercials/en-US/genome-editing/gellaser-phazecore/16741542533540/commercial.mp3",
      "artist": "Genome Editing",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Skystrix Thermoflux",
      "url": "./commercials/en-US/ai-driven-healthcare-and-telemedicine/skystrix-thermoflux/16741547088010/commercial.mp3",
      "artist": "Ai Driven Healthcare And Telemedicine",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "Kompu Tek Deepthink Tech",
      "url": "./commercials/en-US/cyber-weapons/kompu-tek-deepthink-tech/16741577133490/commercial.mp3",
      "artist": "Cyber Weapons",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Mechanoid Scopefire",
      "url": "./commercials/en-US/ai-driven-healthcare-and-telemedicine/mechanoid-scopefire/16741578313940/commercial.mp3",
      "artist": "Ai Driven Healthcare And Telemedicine",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Etherfuse Gearbyte Solutions",
      "url": "./commercials/en-US/molecular-engineering/etherfuse-gearbyte-solutions/16741578521750/commercial.mp3",
      "artist": "Molecular Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Stratace Nullopod",
      "url": "./commercials/en-US/autonomous-agriculture/stratace-nullopod/16741543723100/commercial.mp3",
      "artist": "Autonomous Agriculture",
      "cover_art_url": "assets/img/krang/krang-radio-063.jpg"
    },
    {
      "name": "Coretrix Cybermorph",
      "url": "./commercials/en-US/cyber-terrorism-prevention/coretrix-cybermorph/16741575098740/commercial.mp3",
      "artist": "Cyber Terrorism Prevention",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Gridtrix Group",
      "url": "./commercials/en-US/biotech-research-and-development/gridtrix-group/16741542472640/commercial.mp3",
      "artist": "Biotech Research And Development",
      "cover_art_url": "assets/img/krang/krang-radio-010.jpg"
    },
    {
      "name": "Cryoforge Systems",
      "url": "./commercials/en-US/cyborg-design/cryoforge-systems/16741572119410/commercial.mp3",
      "artist": "Cyborg Design",
      "cover_art_url": "assets/img/krang/krang-radio-097.jpg"
    },
    {
      "name": "Datamind Dataspark Group",
      "url": "./commercials/en-US/solar-energy/datamind-dataspark-group/16741548138770/commercial.mp3",
      "artist": "Solar Energy",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Viracode Group",
      "url": "./commercials/en-US/cyber-physical-security-and-surveillance-systems/viracode-group/16741539322180/commercial.mp3",
      "artist": "Cyber Physical Security And Surveillance Systems",
      "cover_art_url": "assets/img/krang/krang-radio-020.jpg"
    },
    {
      "name": "Solidator Optogenetic",
      "url": "./commercials/en-US/bio-mechanical-systems/solidator-optogenetic/16741547527040/commercial.mp3",
      "artist": "Bio Mechanical Systems",
      "cover_art_url": "assets/img/krang/krang-radio-066.jpg"
    },
    {
      "name": "Darknaut Infrabyte Solutions",
      "url": "./commercials/en-US/drone-technologies/darknaut-infrabyte-solutions/16741545897670/commercial.mp3",
      "artist": "Drone Technologies",
      "cover_art_url": "assets/img/krang/krang-radio-062.jpg"
    },
    {
      "name": "Cybershred Techtrix",
      "url": "./commercials/en-US/robotics-manufacturing/cybershred-techtrix/16741542286710/commercial.mp3",
      "artist": "Robotics Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-001.jpg"
    },
    {
      "name": "Streamtek Synapse",
      "url": "./commercials/en-US/bioprocessing-technologies/streamtek-synapse/16741546670920/commercial.mp3",
      "artist": "Bioprocessing Technologies",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Vesseltek Fluxghost",
      "url": "./commercials/en-US/neuro-gaming/vesseltek-fluxghost/16741548028310/commercial.mp3",
      "artist": "Neuro Gaming",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Nuvonix Gellaser Systems",
      "url": "./commercials/en-US/clandestine-data-storage/nuvonix-gellaser-systems/16741547846890/commercial.mp3",
      "artist": "Clandestine Data Storage",
      "cover_art_url": "assets/img/krang/krang-radio-094.jpg"
    },
    {
      "name": "Optinova Firm",
      "url": "./commercials/en-US/robotic-surgery/optinova-firm/16741545672320/commercial.mp3",
      "artist": "Robotic Surgery",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Cyberkinetic Dyneform Tech",
      "url": "./commercials/en-US/space-exploration/cyberkinetic-dyneform-tech/16741577578870/commercial.mp3",
      "artist": "Space Exploration",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Artiflex Phasedout",
      "url": "./commercials/en-US/gen-engineering/artiflex-phasedout/16741574954780/commercial.mp3",
      "artist": "Gen Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-053.jpg"
    },
    {
      "name": "Coreshadow Wormhole Systems",
      "url": "./commercials/en-US/exoskeleton-design/coreshadow-wormhole-systems/16741576682830/commercial.mp3",
      "artist": "Exoskeleton Design",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Synapse Corporation",
      "url": "./commercials/en-US/cyborg-design/synapse-corporation/16741546567720/commercial.mp3",
      "artist": "Cyborg Design",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Autozone Vortexon Tech",
      "url": "./commercials/en-US/teleportation/autozone-vortexon-tech/16741546301670/commercial.mp3",
      "artist": "Teleportation",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Anotrix Overdrive",
      "url": "./commercials/en-US/robot-repair-services/anotrix-overdrive/16741574377000/commercial.mp3",
      "artist": "Robot Repair Services",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Bitghost Group",
      "url": "./commercials/en-US/neuro-surgery/bitghost-group/16741542790270/commercial.mp3",
      "artist": "Neuro Surgery",
      "cover_art_url": "assets/img/krang/krang-radio-078.jpg"
    },
    {
      "name": "Macroplex Farality Company",
      "url": "./commercials/en-US/space-exploration/macroplex-farality-company/16741572020120/commercial.mp3",
      "artist": "Space Exploration",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Metacode Pulsewolf Company",
      "url": "./commercials/en-US/nano-tech/metacode-pulsewolf-company/16741573712040/commercial.mp3",
      "artist": "Nano Tech",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Phasemetric Company",
      "url": "./commercials/en-US/cybernetics-and-biohacking/phasemetric-company/16741543976590/commercial.mp3",
      "artist": "Cybernetics And Biohacking",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Datamind Interlock Corporation",
      "url": "./commercials/en-US/infiltration-services/datamind-interlock-corporation/16741575156350/commercial.mp3",
      "artist": "Infiltration Services",
      "cover_art_url": "assets/img/krang/krang-radio-064.jpg"
    },
    {
      "name": "Dataworm Group",
      "url": "./commercials/en-US/digital-currency-and-blockchain-services/dataworm-group/16741547024530/commercial.mp3",
      "artist": "Digital Currency And Blockchain Services",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Skystrix Servo Tron",
      "url": "./commercials/en-US/neuro-data-mining/skystrix-servo-tron/16741543253350/commercial.mp3",
      "artist": "Neuro Data Mining",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "Braintech Splicetek",
      "url": "./commercials/en-US/cybercrime-investigation/braintech-splicetek/16741543667340/commercial.mp3",
      "artist": "Cybercrime Investigation",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Neuralink Machina",
      "url": "./commercials/en-US/robotic-security/neuralink-machina/16741539625510/commercial.mp3",
      "artist": "Robotic Security",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Glitchtek Systems",
      "url": "./commercials/en-US/cyber-physical-systems-for-critical-infrastructure/glitchtek-systems/16741541746200/commercial.mp3",
      "artist": "Cyber Physical Systems For Critical Infrastructure",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Metavex Envirotrix",
      "url": "./commercials/en-US/solar-energy/metavex-envirotrix/16741545025610/commercial.mp3",
      "artist": "Solar Energy",
      "cover_art_url": "assets/img/krang/krang-radio-016.jpg"
    },
    {
      "name": "Visotron Neuromaze Company",
      "url": "./commercials/en-US/cybercrime-prosecution-and-legal-services/visotron-neuromaze-company/16741544676180/commercial.mp3",
      "artist": "Cybercrime Prosecution And Legal Services",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Digitex Cybershred",
      "url": "./commercials/en-US/artificial-intelligence-research/digitex-cybershred/16741540431870/commercial.mp3",
      "artist": "Artificial Intelligence Research",
      "cover_art_url": "assets/img/krang/krang-radio-062.jpg"
    },
    {
      "name": "Optifire Firm",
      "url": "./commercials/en-US/autonomous-cybersecurity/optifire-firm/16741573981070/commercial.mp3",
      "artist": "Autonomous Cybersecurity",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Broodlord Meshmind",
      "url": "./commercials/en-US/biomechanical-engineering/broodlord-meshmind/16741544460670/commercial.mp3",
      "artist": "Biomechanical Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Crossthink Firm",
      "url": "./commercials/en-US/cybernetics-engineering/crossthink-firm/16741540242810/commercial.mp3",
      "artist": "Cybernetics Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-053.jpg"
    },
    {
      "name": "Digitron Cyberecho",
      "url": "./commercials/en-US/cyberfashion-and-wearable-technology/digitron-cyberecho/16741576959500/commercial.mp3",
      "artist": "Cyberfashion And Wearable Technology",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Polymorph Exorunner Group",
      "url": "./commercials/en-US/autonomous-cybersecurity/polymorph-exorunner-group/16741543913630/commercial.mp3",
      "artist": "Autonomous Cybersecurity",
      "cover_art_url": "assets/img/krang/krang-radio-016.jpg"
    },
    {
      "name": "Digipulse Cyberdawn Group",
      "url": "./commercials/en-US/mass-customization/digipulse-cyberdawn-group/16741541691780/commercial.mp3",
      "artist": "Mass Customization",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Solidator Quadroflux Solutions",
      "url": "./commercials/en-US/autonomous-asset-management/solidator-quadroflux-solutions/16741577026850/commercial.mp3",
      "artist": "Autonomous Asset Management",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Aurokin Brainpod",
      "url": "./commercials/en-US/molecular-engineering/aurokin-brainpod/16741575983760/commercial.mp3",
      "artist": "Molecular Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Morphefix Virtuloid Group",
      "url": "./commercials/en-US/biotech-engineering/morphefix-virtuloid-group/16741546236920/commercial.mp3",
      "artist": "Biotech Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Neutrinic Tech",
      "url": "./commercials/en-US/biotech-manufacturing/neutrinic-tech/16741547193290/commercial.mp3",
      "artist": "Biotech Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-029.jpg"
    },
    {
      "name": "Paradane Photonic",
      "url": "./commercials/en-US/autonomous-agriculture/paradane-photonic/16741572745710/commercial.mp3",
      "artist": "Autonomous Agriculture",
      "cover_art_url": "assets/img/krang/krang-radio-097.jpg"
    },
    {
      "name": "Corerunner Elecrest",
      "url": "./commercials/en-US/autonomous-robotics-manufacturing/corerunner-elecrest/16741575277190/commercial.mp3",
      "artist": "Autonomous Robotics Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Vectrax Cryoforge Firm",
      "url": "./commercials/en-US/space-exploration/vectrax-cryoforge-firm/16741541012280/commercial.mp3",
      "artist": "Space Exploration",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Vorcelon Astrachrome",
      "url": "./commercials/en-US/security-consulting/vorcelon-astrachrome/16741542170500/commercial.mp3",
      "artist": "Security Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-016.jpg"
    },
    {
      "name": "Mindwarp Bionicspark Solutions",
      "url": "./commercials/en-US/biometric-identification-and-security-systems/mindwarp-bionicspark-solutions/16741571572970/commercial.mp3",
      "artist": "Biometric Identification And Security Systems",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Shadevox Exodrone",
      "url": "./commercials/en-US/avionics-manufacturing/shadevox-exodrone/16741540892800/commercial.mp3",
      "artist": "Avionics Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-091.jpg"
    },
    {
      "name": "Teknozen Energoid",
      "url": "./commercials/en-US/neural-prosthetics/teknozen-energoid/16741541641000/commercial.mp3",
      "artist": "Neural Prosthetics",
      "cover_art_url": "assets/img/krang/krang-radio-046.jpg"
    },
    {
      "name": "Cybermorph Synthtek Corporation",
      "url": "./commercials/en-US/virtual-reality-entertainment-and-tourism/cybermorph-synthtek-corporation/16741571792840/commercial.mp3",
      "artist": "Virtual Reality Entertainment And Tourism",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Plusser Viracode Company",
      "url": "./commercials/en-US/n-gene-technologies/plusser-viracode-company/16741545835400/commercial.mp3",
      "artist": "N Gene Technologies",
      "cover_art_url": "assets/img/krang/krang-radio-034.jpg"
    },
    {
      "name": "Fractronix Omegacore",
      "url": "./commercials/en-US/human-enhancement/fractronix-omegacore/16741545580020/commercial.mp3",
      "artist": "Human Enhancement",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Splicetek Raygne",
      "url": "./commercials/en-US/augmented-human-enhancement/splicetek-raygne/16741572256660/commercial.mp3",
      "artist": "Augmented Human Enhancement",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Nanohive Tech",
      "url": "./commercials/en-US/cybercrime-prevention-and-countermeasures/nanohive-tech/16741541439170/commercial.mp3",
      "artist": "Cybercrime Prevention And Countermeasures",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Hyperplex Stratace",
      "url": "./commercials/en-US/cybernetic-combat-training/hyperplex-stratace/16741542852650/commercial.mp3",
      "artist": "Cybernetic Combat Training",
      "cover_art_url": "assets/img/krang/krang-radio-050.jpg"
    },
    {
      "name": "Hydronyx Optifire Systems",
      "url": "./commercials/en-US/neuromorphic-computing/hydronyx-optifire-systems/16741541229340/commercial.mp3",
      "artist": "Neuromorphic Computing",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Hyperweave Intrascan Systems",
      "url": "./commercials/en-US/cyborg-upgrades/hyperweave-intrascan-systems/16741543100520/commercial.mp3",
      "artist": "Cyborg Upgrades",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Shadertron Atomikron",
      "url": "./commercials/en-US/neuro-gaming/shadertron-atomikron/16741548310010/commercial.mp3",
      "artist": "Neuro Gaming",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Galactix Solutions",
      "url": "./commercials/en-US/neuro-surgery/galactix-solutions/16741545241140/commercial.mp3",
      "artist": "Neuro Surgery",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Kompu Tek Mindwarp Corporation",
      "url": "./commercials/en-US/cybersecurity-and-encryption-services/kompu-tek-mindwarp-corporation/16741540320280/commercial.mp3",
      "artist": "Cybersecurity And Encryption Services",
      "cover_art_url": "assets/img/krang/krang-radio-075.jpg"
    },
    {
      "name": "Machina Neuralink Firm",
      "url": "./commercials/en-US/biotech-manufacturing/machina-neuralink-firm/16741540011380/commercial.mp3",
      "artist": "Biotech Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Cyberdawn Company",
      "url": "./commercials/en-US/neuro-surgery/cyberdawn-company/16741572855130/commercial.mp3",
      "artist": "Neuro Surgery",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Digitron Machina",
      "url": "./commercials/en-US/micro-satellite-launch-services/digitron-machina/16741576085410/commercial.mp3",
      "artist": "Micro Satellite Launch Services",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Neuromaze Company",
      "url": "./commercials/en-US/autonomous-weapons/neuromaze-company/16741577422420/commercial.mp3",
      "artist": "Autonomous Weapons",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Cryptster Injector",
      "url": "./commercials/en-US/cyber-espionage-and-surveillance-services/cryptster-injector/16741539721790/commercial.mp3",
      "artist": "Cyber Espionage And Surveillance Services",
      "cover_art_url": "assets/img/krang/krang-radio-043.jpg"
    },
    {
      "name": "Cybermorph Tech",
      "url": "./commercials/en-US/extraterrestrial-colonization/cybermorph-tech/16741539171970/commercial.mp3",
      "artist": "Extraterrestrial Colonization",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Wormhole Firm",
      "url": "./commercials/en-US/robotic-weaponry/wormhole-firm/16741546119830/commercial.mp3",
      "artist": "Robotic Weaponry",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Infratape Broodlord Group",
      "url": "./commercials/en-US/atmospheric-manipulation/infratape-broodlord-group/16741544935750/commercial.mp3",
      "artist": "Atmospheric Manipulation",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Glitchstream Vorcelon",
      "url": "./commercials/en-US/bioprocessing-technologies/glitchstream-vorcelon/16741574896400/commercial.mp3",
      "artist": "Bioprocessing Technologies",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Neutronix Darkonix Tech",
      "url": "./commercials/en-US/autonomous-robot-maintenance/neutronix-darkonix-tech/16741541486280/commercial.mp3",
      "artist": "Autonomous Robot Maintenance",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Scopefire Group",
      "url": "./commercials/en-US/avionics-manufacturing/scopefire-group/16741578013430/commercial.mp3",
      "artist": "Avionics Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Gearbyte Uniflux",
      "url": "./commercials/en-US/molecular-engineering/gearbyte-uniflux/16741571482890/commercial.mp3",
      "artist": "Molecular Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Hyperweave Servo Tron Solutions",
      "url": "./commercials/en-US/underground-combat-arenas/hyperweave-servo-tron-solutions/16741578211620/commercial.mp3",
      "artist": "Underground Combat Arenas",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Metavex Cryoforge Company",
      "url": "./commercials/en-US/digital-currency-and-blockchain-services/metavex-cryoforge-company/16741574740810/commercial.mp3",
      "artist": "Digital Currency And Blockchain Services",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Cinerus Firm",
      "url": "./commercials/en-US/digital-currency-and-blockchain-services/cinerus-firm/16741540371690/commercial.mp3",
      "artist": "Digital Currency And Blockchain Services",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Quantumdot Corporation",
      "url": "./commercials/en-US/solar-energy/quantumdot-corporation/16741540488630/commercial.mp3",
      "artist": "Solar Energy",
      "cover_art_url": "assets/img/krang/krang-radio-094.jpg"
    },
    {
      "name": "Paradane Solutions",
      "url": "./commercials/en-US/nanotechnology-solutions/paradane-solutions/16741571733960/commercial.mp3",
      "artist": "Nanotechnology Solutions",
      "cover_art_url": "assets/img/krang/krang-radio-063.jpg"
    },
    {
      "name": "Paraglid Envirotrix",
      "url": "./commercials/en-US/autonomous-logistics/paraglid-envirotrix/16741575591710/commercial.mp3",
      "artist": "Autonomous Logistics",
      "cover_art_url": "assets/img/krang/krang-radio-016.jpg"
    },
    {
      "name": "Echoflux Tech",
      "url": "./commercials/en-US/clandestine-data-storage/echoflux-tech/16741541574090/commercial.mp3",
      "artist": "Clandestine Data Storage",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Cybergeist Glitchlord Corporation",
      "url": "./commercials/en-US/biotech-engineering/cybergeist-glitchlord-corporation/16741542038930/commercial.mp3",
      "artist": "Biotech Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Nullopod Cryptflare Company",
      "url": "./commercials/en-US/autonomous-vehicle-technology-and-transportation/nullopod-cryptflare-company/16741572371670/commercial.mp3",
      "artist": "Autonomous Vehicle Technology And Transportation",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Phasemetric Coresphere",
      "url": "./commercials/en-US/neuro-robotics/phasemetric-coresphere/16741546822660/commercial.mp3",
      "artist": "Neuro Robotics",
      "cover_art_url": "assets/img/krang/krang-radio-062.jpg"
    },
    {
      "name": "Reverzo Splicetek Firm",
      "url": "./commercials/en-US/ai-driven-transportation-and-logistics/reverzo-splicetek-firm/16741576855740/commercial.mp3",
      "artist": "Ai Driven Transportation And Logistics",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Corerunner Tech",
      "url": "./commercials/en-US/cybercrime-prevention-and-countermeasures/corerunner-tech/16741577823920/commercial.mp3",
      "artist": "Cybercrime Prevention And Countermeasures",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Babeltech Group",
      "url": "./commercials/en-US/genetic-modification/babeltech-group/16741573764140/commercial.mp3",
      "artist": "Genetic Modification",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Chordshift Solutions",
      "url": "./commercials/en-US/haptic-telepresence/chordshift-solutions/16741572792040/commercial.mp3",
      "artist": "Haptic Telepresence",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Reanimate Company",
      "url": "./commercials/en-US/bio-informatics/reanimate-company/16741576212740/commercial.mp3",
      "artist": "Bio Informatics",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Netwitch Solutions",
      "url": "./commercials/en-US/bioprinting-technologies/netwitch-solutions/16741575831820/commercial.mp3",
      "artist": "Bioprinting Technologies",
      "cover_art_url": "assets/img/krang/krang-radio-076.jpg"
    },
    {
      "name": "Echoflux Mindwarp",
      "url": "./commercials/en-US/robotic-intelligence/echoflux-mindwarp/16741577306190/commercial.mp3",
      "artist": "Robotic Intelligence",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Infrabyte Glitchmaster",
      "url": "./commercials/en-US/post-human-medicine/infrabyte-glitchmaster/16741576374240/commercial.mp3",
      "artist": "Post Human Medicine",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Proxyne Solutions",
      "url": "./commercials/en-US/biometric-payment-and-financial-systems/proxyne-solutions/16741571967570/commercial.mp3",
      "artist": "Biometric Payment And Financial Systems",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Krahnzer Cipherlord Firm",
      "url": "./commercials/en-US/neuro-robotics/krahnzer-cipherlord-firm/16741574652420/commercial.mp3",
      "artist": "Neuro Robotics",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Rezipod Viracode Firm",
      "url": "./commercials/en-US/cryogenic-preservation/rezipod-viracode-firm/16741539041990/commercial.mp3",
      "artist": "Cryogenic Preservation",
      "cover_art_url": "assets/img/krang/krang-radio-076.jpg"
    },
    {
      "name": "Shocktrix Ghostweb Solutions",
      "url": "./commercials/en-US/autonomous-data-analysis/shocktrix-ghostweb-solutions/16741573417960/commercial.mp3",
      "artist": "Autonomous Data Analysis",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Akana Company",
      "url": "./commercials/en-US/bio-engineering/akana-company/16741571851480/commercial.mp3",
      "artist": "Bio Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-028.jpg"
    },
    {
      "name": "Photonetics Systems",
      "url": "./commercials/en-US/post-human-medicine/photonetics-systems/16741544790120/commercial.mp3",
      "artist": "Post Human Medicine",
      "cover_art_url": "assets/img/krang/krang-radio-050.jpg"
    },
    {
      "name": "Voidnet Company",
      "url": "./commercials/en-US/synthetic-organ-manufacturing/voidnet-company/16741542994220/commercial.mp3",
      "artist": "Synthetic Organ Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Roguecode Systems",
      "url": "./commercials/en-US/neuro-robotics/roguecode-systems/16741546356980/commercial.mp3",
      "artist": "Neuro Robotics",
      "cover_art_url": "assets/img/krang/krang-radio-020.jpg"
    },
    {
      "name": "Netwitch Neutrinic Systems",
      "url": "./commercials/en-US/sentient-robotics/netwitch-neutrinic-systems/16741573054470/commercial.mp3",
      "artist": "Sentient Robotics",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Cipherlord Corporation",
      "url": "./commercials/en-US/cryogenic-preservation/cipherlord-corporation/16741542233230/commercial.mp3",
      "artist": "Cryogenic Preservation",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Scriptrix Cyberkinetic",
      "url": "./commercials/en-US/virtual-personal-assistant-and-ai-services/scriptrix-cyberkinetic/16741574595690/commercial.mp3",
      "artist": "Virtual Personal Assistant And Ai Services",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Darktrix Neutronyx",
      "url": "./commercials/en-US/personal-robot-manufacturing/darktrix-neutronyx/16741575403840/commercial.mp3",
      "artist": "Personal Robot Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Glitchnode Nanohive Corporation",
      "url": "./commercials/en-US/cybernetic-implants/glitchnode-nanohive-corporation/16741541155730/commercial.mp3",
      "artist": "Cybernetic Implants",
      "cover_art_url": "assets/img/krang/krang-radio-029.jpg"
    },
    {
      "name": "Urbanova Solutions",
      "url": "./commercials/en-US/robo-lawyers/urbanova-solutions/16741546614370/commercial.mp3",
      "artist": "Robo Lawyers",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Skystrix Darkstrike Company",
      "url": "./commercials/en-US/cybersecurity-consulting/skystrix-darkstrike-company/16741575341110/commercial.mp3",
      "artist": "Cybersecurity Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-053.jpg"
    },
    {
      "name": "Roguecode Corporation",
      "url": "./commercials/en-US/underground-combat-arenas/roguecode-corporation/16741546468260/commercial.mp3",
      "artist": "Underground Combat Arenas",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Optogenetic Digipulse Firm",
      "url": "./commercials/en-US/solar-energy/optogenetic-digipulse-firm/16741571620680/commercial.mp3",
      "artist": "Solar Energy",
      "cover_art_url": "assets/img/krang/krang-radio-074.jpg"
    },
    {
      "name": "Viorth Techgenix Tech",
      "url": "./commercials/en-US/solar-energy/viorth-techgenix-tech/16741578598710/commercial.mp3",
      "artist": "Solar Energy",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Fluxwave Systems",
      "url": "./commercials/en-US/augmented-mobility/fluxwave-systems/16741544526910/commercial.mp3",
      "artist": "Augmented Mobility",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Quantumite Group",
      "url": "./commercials/en-US/synthetic-food-production/quantumite-group/16741573917710/commercial.mp3",
      "artist": "Synthetic Food Production",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Optikin Cyberecho",
      "url": "./commercials/en-US/biometrics-and-identity-verification/optikin-cyberecho/16741541335960/commercial.mp3",
      "artist": "Biometrics And Identity Verification",
      "cover_art_url": "assets/img/krang/krang-radio-028.jpg"
    },
    {
      "name": "Circutrix Viralarm Group",
      "url": "./commercials/en-US/neural-implants-manufacturing/circutrix-viralarm-group/16741546024530/commercial.mp3",
      "artist": "Neural Implants Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-080.jpg"
    },
    {
      "name": "Opticore Artiflex",
      "url": "./commercials/en-US/neuro-data-mining/opticore-artiflex/16741577653220/commercial.mp3",
      "artist": "Neuro Data Mining",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Quantumlex Systems",
      "url": "./commercials/en-US/cybercrime-prosecution-and-legal-services/quantumlex-systems/16741539884840/commercial.mp3",
      "artist": "Cybercrime Prosecution And Legal Services",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Bionicspark Group",
      "url": "./commercials/en-US/cyberintelligence-and-threat-analysis/bionicspark-group/16741575654800/commercial.mp3",
      "artist": "Cyberintelligence And Threat Analysis",
      "cover_art_url": "assets/img/krang/krang-radio-093.jpg"
    },
    {
      "name": "Intrascan Atmosflux",
      "url": "./commercials/en-US/security-consulting/intrascan-atmosflux/16741545789310/commercial.mp3",
      "artist": "Security Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Darknaut Company",
      "url": "./commercials/en-US/autonomous-asset-management/darknaut-company/16741575915650/commercial.mp3",
      "artist": "Autonomous Asset Management",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Virtuloid Company",
      "url": "./commercials/en-US/bioprinting-technologies/virtuloid-company/16741575738760/commercial.mp3",
      "artist": "Bioprinting Technologies",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Chromahawk Infratape Group",
      "url": "./commercials/en-US/biomechanical-engineering/chromahawk-infratape-group/16741545420200/commercial.mp3",
      "artist": "Biomechanical Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Digitron Thermoflux",
      "url": "./commercials/en-US/robo-lawyers/digitron-thermoflux/16741547636850/commercial.mp3",
      "artist": "Robo Lawyers",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Voltplex Phazecore",
      "url": "./commercials/en-US/neural-prosthetics/voltplex-phazecore/16741547466000/commercial.mp3",
      "artist": "Neural Prosthetics",
      "cover_art_url": "assets/img/krang/krang-radio-091.jpg"
    },
    {
      "name": "Vorcelon Broodlord Tech",
      "url": "./commercials/en-US/infiltration-services/vorcelon-broodlord-tech/16741543311920/commercial.mp3",
      "artist": "Infiltration Services",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Fluxtek Corporation",
      "url": "./commercials/en-US/biomechanical-engineering/fluxtek-corporation/16741545181640/commercial.mp3",
      "artist": "Biomechanical Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-076.jpg"
    },
    {
      "name": "Biocode Group",
      "url": "./commercials/en-US/cybercrime-investigation/biocode-group/16741577714470/commercial.mp3",
      "artist": "Cybercrime Investigation",
      "cover_art_url": "assets/img/krang/krang-radio-082.jpg"
    },
    {
      "name": "Gravimorph Dataspark Firm",
      "url": "./commercials/en-US/cybersecurity-consulting/gravimorph-dataspark-firm/16741542113510/commercial.mp3",
      "artist": "Cybersecurity Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Fuzemind Tech",
      "url": "./commercials/en-US/nanotech-manufacturing/fuzemind-tech/16741543598410/commercial.mp3",
      "artist": "Nanotech Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Digitex Group",
      "url": "./commercials/en-US/gene-splicing/digitex-group/16741572421610/commercial.mp3",
      "artist": "Gene Splicing",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Neutroforge N Zone",
      "url": "./commercials/en-US/atmospheric-manipulation/neutroforge-n-zone/16741548245030/commercial.mp3",
      "artist": "Atmospheric Manipulation",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Opticore Tech",
      "url": "./commercials/en-US/solar-energy/opticore-tech/16741538994070/commercial.mp3",
      "artist": "Solar Energy",
      "cover_art_url": "assets/img/krang/krang-radio-091.jpg"
    },
    {
      "name": "Nanoforge Corporation",
      "url": "./commercials/en-US/augmentation-services/nanoforge-corporation/16741577366410/commercial.mp3",
      "artist": "Augmentation Services",
      "cover_art_url": "assets/img/krang/krang-radio-012.jpg"
    },
    {
      "name": "Sleeperbot Vectrax",
      "url": "./commercials/en-US/exoskeleton-development/sleeperbot-vectrax/16741574073820/commercial.mp3",
      "artist": "Exoskeleton Development",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Dataknight Biocode Group",
      "url": "./commercials/en-US/space-exploration/dataknight-biocode-group/16741545087220/commercial.mp3",
      "artist": "Space Exploration",
      "cover_art_url": "assets/img/krang/krang-radio-064.jpg"
    },
    {
      "name": "Polymorphix Sonicrez",
      "url": "./commercials/en-US/ai-driven-healthcare-and-telemedicine/polymorphix-sonicrez/16741576297160/commercial.mp3",
      "artist": "Ai Driven Healthcare And Telemedicine",
      "cover_art_url": "assets/img/krang/krang-radio-081.jpg"
    },
    {
      "name": "Stratace Buzztrix",
      "url": "./commercials/en-US/cyber-security-services/stratace-buzztrix/16741544168700/commercial.mp3",
      "artist": "Cyber Security Services",
      "cover_art_url": "assets/img/krang/krang-radio-016.jpg"
    },
    {
      "name": "Corerunner Group",
      "url": "./commercials/en-US/cyberfashion-and-wearable-technology/corerunner-group/16741545301430/commercial.mp3",
      "artist": "Cyberfashion And Wearable Technology",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Sparxon Systems",
      "url": "./commercials/en-US/cybersecurity-consulting/sparxon-systems/16741547912990/commercial.mp3",
      "artist": "Cybersecurity Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Greymatter Group",
      "url": "./commercials/en-US/drones-robotics/greymatter-group/16741544068700/commercial.mp3",
      "artist": "Drones Robotics",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Nexustar Tech",
      "url": "./commercials/en-US/cryogenic-preservation/nexustar-tech/16741539782840/commercial.mp3",
      "artist": "Cryogenic Preservation",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Uniflux Logance Group",
      "url": "./commercials/en-US/augmentation-services/uniflux-logance-group/16741547788800/commercial.mp3",
      "artist": "Augmentation Services",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Noxilon Firebrand Corporation",
      "url": "./commercials/en-US/drones-and-uav-technology/noxilon-firebrand-corporation/16741577762790/commercial.mp3",
      "artist": "Drones And Uav Technology",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Cyberwave Optinova Group",
      "url": "./commercials/en-US/holographic-imaging-solutions/cyberwave-optinova-group/16741539103700/commercial.mp3",
      "artist": "Holographic Imaging Solutions",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Darknaut Virusnet Tech",
      "url": "./commercials/en-US/n-gene-technologies/darknaut-virusnet-tech/16741547310950/commercial.mp3",
      "artist": "N Gene Technologies",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Roguecode Nuvonix",
      "url": "./commercials/en-US/nanotechnology-production-and-research/roguecode-nuvonix/16741539519330/commercial.mp3",
      "artist": "Nanotechnology Production And Research",
      "cover_art_url": "assets/img/krang/krang-radio-093.jpg"
    },
    {
      "name": "Exozone Cybermorph Systems",
      "url": "./commercials/en-US/bio-tech/exozone-cybermorph-systems/16741578415060/commercial.mp3",
      "artist": "Bio Tech",
      "cover_art_url": "assets/img/krang/krang-radio-020.jpg"
    },
    {
      "name": "Coreclone Group",
      "url": "./commercials/en-US/cybernetic-weapons/coreclone-group/16741543860600/commercial.mp3",
      "artist": "Cybernetic Weapons",
      "cover_art_url": "assets/img/krang/krang-radio-072.jpg"
    },
    {
      "name": "Subspark Paraglid",
      "url": "./commercials/en-US/cyberwarfare-and-intelligence-services/subspark-paraglid/16741577930430/commercial.mp3",
      "artist": "Cyberwarfare And Intelligence Services",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Darkdrone Farality",
      "url": "./commercials/en-US/virtual-reality-entertainment-and-tourism/darkdrone-farality/16741548418990/commercial.mp3",
      "artist": "Virtual Reality Entertainment And Tourism",
      "cover_art_url": "assets/img/krang/krang-radio-024.jpg"
    },
    {
      "name": "Datamind Lightrace",
      "url": "./commercials/en-US/clandestine-data-storage/datamind-lightrace/16741572955990/commercial.mp3",
      "artist": "Clandestine Data Storage",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Vortexon Tech",
      "url": "./commercials/en-US/cyborg-design/vortexon-tech/16741571914230/commercial.mp3",
      "artist": "Cyborg Design",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Logance Company",
      "url": "./commercials/en-US/cyber-physical-security-and-surveillance-systems/logance-company/16741544300570/commercial.mp3",
      "artist": "Cyber Physical Security And Surveillance Systems",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Cyberblade Company",
      "url": "./commercials/en-US/drone-delivery-services/cyberblade-company/16741572996050/commercial.mp3",
      "artist": "Drone Delivery Services",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Warpwave Astrachrome",
      "url": "./commercials/en-US/human-enhancement/warpwave-astrachrome/16741540184680/commercial.mp3",
      "artist": "Human Enhancement",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Plextar N Zone Group",
      "url": "./commercials/en-US/cyber-weapons/plextar-n-zone-group/16741541979040/commercial.mp3",
      "artist": "Cyber Weapons",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Algoracle Nanomind",
      "url": "./commercials/en-US/cybercrime-prevention-and-countermeasures/algoracle-nanomind/16741573816930/commercial.mp3",
      "artist": "Cybercrime Prevention And Countermeasures",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Splicetek Firm",
      "url": "./commercials/en-US/nano-tech/splicetek-firm/16741541836970/commercial.mp3",
      "artist": "Nano Tech",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Techgenix Corporation",
      "url": "./commercials/en-US/genome-editing/techgenix-corporation/16741545964350/commercial.mp3",
      "artist": "Genome Editing",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Quantumlex Protokron Company",
      "url": "./commercials/en-US/augmented-human-enhancement/quantumlex-protokron-company/16741574316460/commercial.mp3",
      "artist": "Augmented Human Enhancement",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Polymorphix Firm",
      "url": "./commercials/en-US/gene-splicing/polymorphix-firm/16741544612280/commercial.mp3",
      "artist": "Gene Splicing",
      "cover_art_url": "assets/img/krang/krang-radio-029.jpg"
    },
    {
      "name": "Rezipod Vorcelon",
      "url": "./commercials/en-US/virtual-reality-rehabilitation-and-therapy/rezipod-vorcelon/16741576611580/commercial.mp3",
      "artist": "Virtual Reality Rehabilitation And Therapy",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Cinerus Plasmatech",
      "url": "./commercials/en-US/circadian-modification/cinerus-plasmatech/16741576166190/commercial.mp3",
      "artist": "Circadian Modification",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Thermodyne Halocode",
      "url": "./commercials/en-US/cybernetics-and-biohacking/thermodyne-halocode/16741546728070/commercial.mp3",
      "artist": "Cybernetics And Biohacking",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Cybermorph Optogenetic Solutions",
      "url": "./commercials/en-US/autonomous-agriculture/cybermorph-optogenetic-solutions/16741546414370/commercial.mp3",
      "artist": "Autonomous Agriculture",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Fluxghost Tech",
      "url": "./commercials/en-US/robotic-logistics/fluxghost-tech/16741547692270/commercial.mp3",
      "artist": "Robotic Logistics",
      "cover_art_url": "assets/img/krang/krang-radio-096.jpg"
    },
    {
      "name": "Reanimate Psycmech Corporation",
      "url": "./commercials/en-US/cyber-weapons/reanimate-psycmech-corporation/16741540953440/commercial.mp3",
      "artist": "Cyber Weapons",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Envirotrix Airshades Solutions",
      "url": "./commercials/en-US/biohacking-research-development/envirotrix-airshades-solutions/16741546908100/commercial.mp3",
      "artist": "Biohacking Research Development",
      "cover_art_url": "assets/img/krang/krang-radio-036.jpg"
    }    
  ]
});

