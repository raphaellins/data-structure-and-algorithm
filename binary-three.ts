class ElementNode {
	value: number;
	left: ElementNode;
	right: ElementNode;

	constructor(value: number) {
		this.value = value;
	}
}

class Tree {
	root: ElementNode;

	insert(value: number, elementNode: ElementNode) {
		if (this.root == null) {
			this.root = new ElementNode(value);
		} else if (value < elementNode.value) {
			if (elementNode.left == null) {
				elementNode.left = new ElementNode(value);
			} else {
				this.insert(value, elementNode.left);
			}
		} else if (value > elementNode.value) {
			if (elementNode.right == null) {
				elementNode.right = new ElementNode(value);
			} else {
				this.insert(value, elementNode.right);
			}
		}
	}

	preOrder(elementNode: ElementNode) {
		console.log(elementNode.value);

		if (elementNode.left != null) {
			this.preOrder(elementNode.left);
		}

		if (elementNode.right != null) {
			this.preOrder(elementNode.right);
		}
	}

	inOrder(elementNode: ElementNode) {
		if (elementNode.left != null) {
			this.preOrder(elementNode.left);
		}

		console.log(elementNode.value);

		if (elementNode.right != null) {
			this.preOrder(elementNode.right);
		}
	}

	posOrder(elementNode: ElementNode) {
		if (elementNode.left != null) {
			this.preOrder(elementNode.left);
		}

		if (elementNode.right != null) {
			this.preOrder(elementNode.right);
		}

		console.log(elementNode.value);
	}
}
