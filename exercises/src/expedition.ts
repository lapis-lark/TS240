interface Moose {
  yodel(): void;
}

interface Lion {
  maul(): void;
}

type beautifulBeasts = Moose & Lion;

let beast: beautifulBeasts = {yodel: () => {}, maul: () => {}};

beast.yodel();