export default {
    MAIN_VIEW(state) {
        const { translation, langs, loading, selectedLang } = state;
        return {
            translation,
            langs,
            loading,
            selectedLang
        };
    }
};
