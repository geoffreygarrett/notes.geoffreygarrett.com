

## Activate environment in `bash`

```bash
eval "$(conda shell.bash hook)"
conda activate <env-name>
```

Otherwise:
```bash
source ~/anaconda3/etc/profile.d/conda.sh
conda activate <env-name>
```