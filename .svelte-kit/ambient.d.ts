
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const DB_USER: string;
	export const DB_PASSWORD: string;
	export const NVM_INC: string;
	export const npm_package_devDependencies_vite_plugin_restart: string;
	export const npm_package_scripts_dev_remote: string;
	export const MANPATH: string;
	export const npm_package_devDependencies_stylelint_config_recommended: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_devDependencies_vite_plugin_eruda: string;
	export const npm_package_devDependencies__unocss_extractor_pug: string;
	export const npm_package_scripts_lint_styles: string;
	export const TERM_PROGRAM: string;
	export const npm_package_devDependencies_vite_plugin_compression: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const NVM_CD_FLAGS: string;
	export const npm_package_devDependencies_vite_plugin_pwa: string;
	export const npm_package_devDependencies_vite_plugin_mock: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_config_version_git_tag: string;
	export const SHELL: string;
	export const TERM: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_package_scripts_format_stylelint: string;
	export const HOMEBREW_BOTTLE_DOMAIN: string;
	export const npm_package_scripts_test_ui: string;
	export const TMPDIR: string;
	export const HOMEBREW_REPOSITORY: string;
	export const CONDA_SHLVL: string;
	export const npm_package_dependencies__sveltejs_kit: string;
	export const npm_package_devDependencies__vitest_ui: string;
	export const npm_package_devDependencies__unocss_preset_uno: string;
	export const npm_package_scripts_lint: string;
	export const npm_config_init_license: string;
	export const TERM_PROGRAM_VERSION: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const npm_package_dependencies_cookie: string;
	export const npm_package_scripts_dev: string;
	export const MallocNanoZone: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const ZDOTDIR: string;
	export const npm_package_devDependencies_sass_loader: string;
	export const npm_package_devDependencies_stylelint_order: string;
	export const npm_package_dependencies__babel_preset_env: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const npm_package_private: string;
	export const npm_config_registry: string;
	export const npm_package_devDependencies_stylelint_config_standard: string;
	export const npm_package_devDependencies__unocss_svelte_scoped: string;
	export const npm_package_devDependencies__picocss_pico: string;
	export const npm_package_readmeFilename: string;
	export const USER: string;
	export const NVM_DIR: string;
	export const npm_package_description: string;
	export const npm_package_license: string;
	export const COMMAND_MODE: string;
	export const npm_package_devDependencies__unocss_eslint_config: string;
	export const CONDA_EXE: string;
	export const SSH_AUTH_SOCK: string;
	export const npm_package_devDependencies_vite_plugin_progress: string;
	export const npm_package_devDependencies_typed_js: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const HOMEBREW_NO_AUTO_UPDATE: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_package_devDependencies_eslint: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_devDependencies_svelte_i18n: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_devDependencies__testing_library_svelte: string;
	export const npm_package_devDependencies_stylelint_prettier: string;
	export const _CE_CONDA: string;
	export const npm_package_devDependencies__unocss_transformer_directives: string;
	export const npm_package_dependencies_vanilla_tilt: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const PATH: string;
	export const npm_config_argv: string;
	export const npm_package_dependencies__babel_core: string;
	export const _: string;
	export const __CFBundleIdentifier: string;
	export const USER_ZDOTDIR: string;
	export const CONDA_PREFIX: string;
	export const npm_package_dependencies__sxzz_eslint_config: string;
	export const npm_package_devDependencies_vite_plugin_svg_icons: string;
	export const npm_package_devDependencies_sveltekit_autoimport: string;
	export const npm_package_scripts_serve_json: string;
	export const PWD: string;
	export const npm_package_dependencies_node_sass: string;
	export const npm_package_devDependencies__vite_pwa_assets_generator: string;
	export const npm_package_scripts_test_watch: string;
	export const npm_package_scripts_preview: string;
	export const npm_lifecycle_event: string;
	export const npm_package_devDependencies_jsdom: string;
	export const LANG: string;
	export const npm_package_devDependencies__tsconfig_svelte: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_name: string;
	export const npm_package_devDependencies_stylelint_config_prettier: string;
	export const npm_package_devDependencies_stylelint_config_standard_scss: string;
	export const npm_package_devDependencies_sass: string;
	export const npm_package_devDependencies__vitest_coverage_v8: string;
	export const npm_package_scripts_build: string;
	export const npm_config_version_commit_hooks: string;
	export const XPC_FLAGS: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_package_devDependencies_vitest: string;
	export const npm_package_devDependencies_stylelint: string;
	export const npm_package_devDependencies__rollup_plugin_alias: string;
	export const npm_config_bin_links: string;
	export const npm_config_ignore_engines: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const XPC_SERVICE_NAME: string;
	export const _CE_M: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_version: string;
	export const VSCODE_INJECTION: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const HOME: string;
	export const SHLVL: string;
	export const npm_package_devDependencies_unocss: string;
	export const npm_package_type: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const GOROOT: string;
	export const npm_package_scripts_test: string;
	export const npm_config_save_prefix: string;
	export const npm_config_strict_ssl: string;
	export const HOMEBREW_PREFIX: string;
	export const npm_package_dependencies_gsap: string;
	export const npm_package_devDependencies_husky: string;
	export const npm_config_version_git_message: string;
	export const LOGNAME: string;
	export const PYTHONPATH: string;
	export const CONDA_PYTHON_EXE: string;
	export const YARN_WRAP_OUTPUT: string;
	export const npm_package_scripts_format: string;
	export const npm_package_scripts_test_coverage: string;
	export const npm_lifecycle_script: string;
	export const npm_package_dependencies__vitejs_plugin_vue_jsx: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const NVM_BIN: string;
	export const GOPATH: string;
	export const CONDA_DEFAULT_ENV: string;
	export const NANOEM_TARGET_COMPILER: string;
	export const npm_package_dependencies__types_cookie: string;
	export const npm_package_devDependencies_prettier_plugin_css_order: string;
	export const npm_config_version_git_sign: string;
	export const npm_config_ignore_scripts: string;
	export const npm_config_user_agent: string;
	export const GIT_ASKPASS: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const HOMEBREW_CELLAR: string;
	export const INFOPATH: string;
	export const npm_package_dependencies_svelte_spa_router: string;
	export const npm_package_devDependencies_vite_plugin_pages: string;
	export const npm_package_scripts_generate_pwa_assets: string;
	export const npm_package_dependencies_json_server: string;
	export const npm_package_scripts_prepare: string;
	export const npm_package_scripts_format_prettier: string;
	export const npm_config_init_version: string;
	export const npm_config_ignore_optional: string;
	export const npm_package_devDependencies_vite_plugin_imagemin: string;
	export const npm_package_scripts_check: string;
	export const COLORTERM: string;
	export const npm_node_execpath: string;
	export const npm_package_devDependencies__testing_library_jest_dom: string;
	export const npm_config_version_tag_prefix: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		DB_USER: string;
		DB_PASSWORD: string;
		NVM_INC: string;
		npm_package_devDependencies_vite_plugin_restart: string;
		npm_package_scripts_dev_remote: string;
		MANPATH: string;
		npm_package_devDependencies_stylelint_config_recommended: string;
		npm_package_devDependencies_prettier: string;
		npm_package_devDependencies_vite_plugin_eruda: string;
		npm_package_devDependencies__unocss_extractor_pug: string;
		npm_package_scripts_lint_styles: string;
		TERM_PROGRAM: string;
		npm_package_devDependencies_vite_plugin_compression: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		NODE: string;
		INIT_CWD: string;
		NVM_CD_FLAGS: string;
		npm_package_devDependencies_vite_plugin_pwa: string;
		npm_package_devDependencies_vite_plugin_mock: string;
		npm_package_devDependencies_typescript: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_config_version_git_tag: string;
		SHELL: string;
		TERM: string;
		npm_package_devDependencies_vite: string;
		npm_package_scripts_format_stylelint: string;
		HOMEBREW_BOTTLE_DOMAIN: string;
		npm_package_scripts_test_ui: string;
		TMPDIR: string;
		HOMEBREW_REPOSITORY: string;
		CONDA_SHLVL: string;
		npm_package_dependencies__sveltejs_kit: string;
		npm_package_devDependencies__vitest_ui: string;
		npm_package_devDependencies__unocss_preset_uno: string;
		npm_package_scripts_lint: string;
		npm_config_init_license: string;
		TERM_PROGRAM_VERSION: string;
		CONDA_PROMPT_MODIFIER: string;
		npm_package_dependencies_cookie: string;
		npm_package_scripts_dev: string;
		MallocNanoZone: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		ZDOTDIR: string;
		npm_package_devDependencies_sass_loader: string;
		npm_package_devDependencies_stylelint_order: string;
		npm_package_dependencies__babel_preset_env: string;
		npm_package_devDependencies_svelte_preprocess: string;
		npm_package_private: string;
		npm_config_registry: string;
		npm_package_devDependencies_stylelint_config_standard: string;
		npm_package_devDependencies__unocss_svelte_scoped: string;
		npm_package_devDependencies__picocss_pico: string;
		npm_package_readmeFilename: string;
		USER: string;
		NVM_DIR: string;
		npm_package_description: string;
		npm_package_license: string;
		COMMAND_MODE: string;
		npm_package_devDependencies__unocss_eslint_config: string;
		CONDA_EXE: string;
		SSH_AUTH_SOCK: string;
		npm_package_devDependencies_vite_plugin_progress: string;
		npm_package_devDependencies_typed_js: string;
		__CF_USER_TEXT_ENCODING: string;
		HOMEBREW_NO_AUTO_UPDATE: string;
		npm_package_devDependencies_postcss: string;
		npm_package_devDependencies_eslint: string;
		npm_execpath: string;
		npm_package_devDependencies_tslib: string;
		npm_package_devDependencies_svelte_i18n: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		npm_package_devDependencies_svelte: string;
		npm_package_devDependencies__testing_library_svelte: string;
		npm_package_devDependencies_stylelint_prettier: string;
		_CE_CONDA: string;
		npm_package_devDependencies__unocss_transformer_directives: string;
		npm_package_dependencies_vanilla_tilt: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		PATH: string;
		npm_config_argv: string;
		npm_package_dependencies__babel_core: string;
		_: string;
		__CFBundleIdentifier: string;
		USER_ZDOTDIR: string;
		CONDA_PREFIX: string;
		npm_package_dependencies__sxzz_eslint_config: string;
		npm_package_devDependencies_vite_plugin_svg_icons: string;
		npm_package_devDependencies_sveltekit_autoimport: string;
		npm_package_scripts_serve_json: string;
		PWD: string;
		npm_package_dependencies_node_sass: string;
		npm_package_devDependencies__vite_pwa_assets_generator: string;
		npm_package_scripts_test_watch: string;
		npm_package_scripts_preview: string;
		npm_lifecycle_event: string;
		npm_package_devDependencies_jsdom: string;
		LANG: string;
		npm_package_devDependencies__tsconfig_svelte: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_name: string;
		npm_package_devDependencies_stylelint_config_prettier: string;
		npm_package_devDependencies_stylelint_config_standard_scss: string;
		npm_package_devDependencies_sass: string;
		npm_package_devDependencies__vitest_coverage_v8: string;
		npm_package_scripts_build: string;
		npm_config_version_commit_hooks: string;
		XPC_FLAGS: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_package_devDependencies_vitest: string;
		npm_package_devDependencies_stylelint: string;
		npm_package_devDependencies__rollup_plugin_alias: string;
		npm_config_bin_links: string;
		npm_config_ignore_engines: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		XPC_SERVICE_NAME: string;
		_CE_M: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_version: string;
		VSCODE_INJECTION: string;
		npm_package_devDependencies_svelte_check: string;
		npm_package_devDependencies_autoprefixer: string;
		HOME: string;
		SHLVL: string;
		npm_package_devDependencies_unocss: string;
		npm_package_type: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		GOROOT: string;
		npm_package_scripts_test: string;
		npm_config_save_prefix: string;
		npm_config_strict_ssl: string;
		HOMEBREW_PREFIX: string;
		npm_package_dependencies_gsap: string;
		npm_package_devDependencies_husky: string;
		npm_config_version_git_message: string;
		LOGNAME: string;
		PYTHONPATH: string;
		CONDA_PYTHON_EXE: string;
		YARN_WRAP_OUTPUT: string;
		npm_package_scripts_format: string;
		npm_package_scripts_test_coverage: string;
		npm_lifecycle_script: string;
		npm_package_dependencies__vitejs_plugin_vue_jsx: string;
		VSCODE_GIT_IPC_HANDLE: string;
		NVM_BIN: string;
		GOPATH: string;
		CONDA_DEFAULT_ENV: string;
		NANOEM_TARGET_COMPILER: string;
		npm_package_dependencies__types_cookie: string;
		npm_package_devDependencies_prettier_plugin_css_order: string;
		npm_config_version_git_sign: string;
		npm_config_ignore_scripts: string;
		npm_config_user_agent: string;
		GIT_ASKPASS: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		HOMEBREW_CELLAR: string;
		INFOPATH: string;
		npm_package_dependencies_svelte_spa_router: string;
		npm_package_devDependencies_vite_plugin_pages: string;
		npm_package_scripts_generate_pwa_assets: string;
		npm_package_dependencies_json_server: string;
		npm_package_scripts_prepare: string;
		npm_package_scripts_format_prettier: string;
		npm_config_init_version: string;
		npm_config_ignore_optional: string;
		npm_package_devDependencies_vite_plugin_imagemin: string;
		npm_package_scripts_check: string;
		COLORTERM: string;
		npm_node_execpath: string;
		npm_package_devDependencies__testing_library_jest_dom: string;
		npm_config_version_tag_prefix: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
