kity.extendClass(Minder, {

    getRoot: function() {
        return this._root;
    },

    setRoot: function(root) {
        this._root = root;
        root.minder = this;
    },

    createNode: function(unknown) {
        var node = new MinderNode(unknown);
        this.handelNodeCreate(node);
        return node;
    },

    removeNode: function(node) {
        if (node.parent) {
            node.parent.removeChild(node);
            this.handelNodeRemove(node);
        }
    },

    handelNodeCreate: function(node) {
        var rc = this._rc;
        node.traverse(function(current) {
            rc.addShape(current.getRenderContainer());
        });
        rc.addShape(node.getRenderContainer());
    },

    handelNodeRemove: function(node) {
        var rc = this._rc;
        node.traverse(function(current) {
            rc.removeShape(current.getRenderContainer());
        });
    },

    getMinderTitle: function() {
        return this.getRoot().getText();
    }

});

kity.extendClass(MinderNode, {
    getMinder: function() {
        return this.root.minder;
    }
});