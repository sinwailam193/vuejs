export default {
    CHANGE_STATE(state, payload) {
        Object.keys(payload).forEach(key => { state[key] = payload[key]; });
    },
    MUTATE_TRANSLATION_WORD(state, { translation, loading }) {
        state.translation = translation;
        state.loading = loading;
    },
    MUTATE_LANGS(state, langs) {
        state.langs = langs;
    }
};
