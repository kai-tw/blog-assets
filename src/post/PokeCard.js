class PokeCard {
	static init() {
		const nodes = document.getElementsByClassName("poke-card");

		if (nodes.length > 0) {
			Promise.all([
				this._loadJson(),
				this._loadStyle(),
			]).then(() => {
				for (let i = 0; i < nodes.length; i++) {
					const node = nodes[i];
					if (!node.dataset.id) {
						// No ID provided, skip.
						continue;
					}
					this._createCard(node);
				}
			});
		}
	}

	static _createCard(node) {
		const data = this._pokeDex.find((e) => e['ID'] === node.dataset.id);

		const className = data['Type'][0].toLowerCase();
		node.classList.add('poke-' + className);

		// Create the background container.
		const pokeBackNode = document.createElement('div');
		node.appendChild(pokeBackNode);

		// Create the background image.
		const idString = data['ID'].toString().padStart(3, '0');
		const imageNode = document.createElement('img');
		imageNode.alt = data['Chinese'];
		imageNode.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idString}.png`;
		pokeBackNode.appendChild(imageNode);

		// Create the data container.
		const pokeDataNode = document.createElement('div');
		pokeDataNode.classList.add('poke-data');
		node.appendChild(pokeDataNode);

		// Create the icon container.
		const pokeIconNode = document.createElement('div');
		pokeIconNode.classList.add('poke-icon');
		pokeDataNode.appendChild(pokeIconNode);

		// Create the type container.
		const pokeTypeNode = document.createElement('div');
		pokeTypeNode.classList.add('poke-type');
		pokeDataNode.appendChild(pokeTypeNode);

		// Create the type text.
		data['Type'].forEach((type) => {
			const typeNode = document.createElement('span');
			typeNode.classList.add('text-' + type.toLowerCase());
			typeNode.innerText = type;
			pokeTypeNode.appendChild(typeNode);
		});

		// Create the ID.
		const pokeIdNode = document.createElement('div');
		pokeIdNode.classList.add('poke-id');
		pokeDataNode.appendChild(pokeIdNode);
		pokeIdNode.innerText = data['ID'];

		// Create the Chinese name.
		const chineseNameNode = document.createElement('div');
		chineseNameNode.classList.add('poke-lang');
		chineseNameNode.innerText = data['Chinese'];
		pokeDataNode.appendChild(chineseNameNode);

		// Create the Japanese name.
		const japaneseNameNode = document.createElement('div');
		japaneseNameNode.classList.add('poke-lang');
		japaneseNameNode.innerText = data['Japanese'];
		pokeDataNode.appendChild(japaneseNameNode);

		// Create the English name.
		const englishNameNode = document.createElement('div');
		englishNameNode.classList.add('poke-lang');
		englishNameNode.innerText = data['English'];
		pokeDataNode.appendChild(englishNameNode);
	}

	static _loadStyle() {
		return import('@sass/poke-card.sass');
	}

	static _loadJson() {
		return import('@json/poke-dex.json').then((value) => {
			this._pokeDex = value;
			return Promise.resolve();
		});
	}
}

export default PokeCard;
